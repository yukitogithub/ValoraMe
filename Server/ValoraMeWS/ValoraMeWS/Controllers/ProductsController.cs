using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ValoraMeWS.Models;

namespace ValoraMeWS.Controllers
{
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