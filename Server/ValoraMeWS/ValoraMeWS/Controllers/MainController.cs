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
using System.Web.Mvc;
using ValoraMeWS.Models;

namespace ValoraMeWS.Controllers
{
    public class MainController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/GeneralLocal
        public JsonResult GetProducts()
        {
            // Mejores y Peores productos
            /*
                 JSON Format:

                'id': 18,
                'name': 'Claro',
                'avg': 0.2,
                'comments': 2345847
             */
            var bestProducts = db.Products.Include(x=>x.Comments).OrderByDescending(x => x.Stars).Take(5);
            List<Object> bp = new List<object>();
            foreach (var item in bestProducts)
            {
                bp.Add(
                    new
                    {
                        id = item.Id,
                        name = item.Name,
                        avg = item.Stars,
                        comments = item.Comments.Count
                    }
                    );
            }

            var worstProducts = db.Products.Include(x=>x.Comments).OrderBy(x => x.Stars).Take(5);
            List<Object> wp = new List<object>();
            foreach (var item in worstProducts)
            {
                wp.Add(
                    new
                    {
                        id = item.Id,
                        name = item.Name,
                        avg = item.Stars,
                        comments = item.Comments.Count
                    }
                    );
            }

            // Recent Comments
            /*
                 Formato json:

                'votated': 'Personal',
                'votatedId' : 234,
                'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
                'stars': 1,
                'date': new Date(2015,0,16),
                'comentator': 'Fernando Luján'
             */
            var recentComments = db.Comments.OrderByDescending(x => x.Date).Take(6).ToList();
            List<Object> c = new List<object>();
            foreach (var item in recentComments)
            {
                c.Add(
                    new
                    {
                        votated = item.Product.Name,
                        votatedId = item.Product.Id,
                        comment = item.Opinion,
                        stars = item.Stars,
                        date = item.Date,
                        comentator = "Username" //item.User.UserName
                    }
                    );
            }

            //Armo el resultado como json
            var result = new { bestProducts = bp, worstProducts = wp, recentComments = c };
            //Instancio un jsonresult
            var retorno = new JsonResult();
            //Le añado la data
            retorno.Data = result;
            //Return
            return retorno;
        }
    }
}
