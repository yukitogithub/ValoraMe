﻿//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Data.Entity;
//using System.Data.Entity.Infrastructure;
//using System.Linq;
//using System.Linq.Expressions;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using System.Web.Http.Routing;
//using System.Web.Http.Description;
//using System.Web.Mvc;
//using System.Web.Mvc.Routing;
//using System.Web.Routing;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Mvc;
using ValoraMeWS.Models;

namespace ValoraMeWS.Controllers
{
    [System.Web.Http.RoutePrefix("api/products")]
    public class ProductsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Products
        public IQueryable<Product> GetProducts()
        {
            try
            {
                //return db.Products;
                List<Product> list = new List<Product>();
                var products = db.Products;
                foreach (var product in products)
                {
                    list.Add(product);
                }
                return list.AsQueryable();
            }
            catch(Exception e)
            {
                return null;
            }
            
        }

        // GET: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(Product))]
        //public IHttpActionResult PostProduct(Product product, ICollection<Social> socials)
        public IHttpActionResult PostProduct(ProductRequest productRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            productRequest.Product.Stars = 0;
            var category = db.Categories.FirstOrDefault(x => x.Id == productRequest.Product.CategoryId);
            if (category == null)
            {
                return BadRequest(ModelState);
            }
            productRequest.Product.Category = category;
            productRequest.Product.Links = new List<Social>();
            foreach (var social in productRequest.Socials)
            {
                db.Socials.Add(social);
                productRequest.Product.Links.Add(social);
            }
            db.Products.Add(productRequest.Product);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = productRequest.Product.Id }, productRequest.Product);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        //Get comments from the product
        /*
            'name' : 'Personal',
	        'category' : 'Telefonía',
	        'stars' : 3.2,
	        'img' : 'https://oceanoneuronal.files.wordpress.com/2012/06/logo_personal_nuevo.jpg',
	        'comments' : 
		        [
                    {
			            'stars': 4,
			            'comment' : 'Tiene alcance en mi ciudad, el 3g mas o menos, pero anda para mandar Whatsapps.',
			            'addedBy' : 'Cosme Fulanito',
			            'date' : new Date (2015, 0, 04)
		            },{...}
	            ]
         */
        [System.Web.Http.Route("{productId:int}/{cantCom:int:range(4,100)}/{index:int?}")]
        public JsonResult GetProductWithLComments(int productId, int cantCom, int index=0)
        {
            Product product = db.Products.Include(x=>x.Comments).FirstOrDefault(x=>x.Id == productId);
            if(product.Comments != null && ((index + cantCom) <= product.Comments.Count))
                product.Comments = product.Comments.OrderByDescending(x => x.Date).ToList().GetRange(index, cantCom);
            else
                product.Comments = product.Comments.OrderByDescending(x => x.Date).ToList().GetRange(index, (product.Comments.Count - index));
            return new JsonResult() { Data = product };
        }

        //Search for a product
        /*
         categorias: [
            {name: "Electrónicos"},
            {name: "Servicios de Medicina"},
            {name: "Restaurants"},
            {name: "Alimentos"}
            ],
        resultados: [
            {
            id: 542,
            name: "Nokia Lumia 710",
            categoria: "Electrónicos",
            stars: 3.8
            },
            {...}
            ]
         */
        //TODO: Modificar el formato del resultado!!!
        [System.Web.Http.Route("search/{term}")]
        [System.Web.Http.HttpGet]
        public JsonResult SearchProduct(string term)
        {
            List<Product> products = db.Products.Include(x => x.Comments).Where(x => x.Name.Contains(term)).ToList();
            var resultado = new { categorias = new List<object>(), resultados = new List<object>()};
            foreach (var prod in products)
            {
                object cat = new { name = prod.Category.Name };
                if (!resultado.categorias.Exists(x => x.Equals(cat)))
                { 
                    resultado.categorias.Add(new { name = prod.Category.Name });
                }
                resultado.resultados.Add(
                    new {
                            id = prod.Id,
                            name = prod.Name,
                            categoria = prod.Category.Name,
                            stars = prod.Stars
                        }
                    );
            }
            return new JsonResult() { Data = resultado };
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.Id == id) > 0;
        }
    }
}