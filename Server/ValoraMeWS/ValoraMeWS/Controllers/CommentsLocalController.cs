using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ValoraMeWS.Models;

namespace ValoraMeWS.Controllers
{
    public class CommentsLocalController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        
        // GET: CommentsLocal
        public ActionResult Index()
        {
            db.Configuration.LazyLoadingEnabled = true;
            return View(db.Comments.ToList());
        }

        // GET: CommentsLocal/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // GET: CommentsLocal/Create
        public ActionResult Create(int productid)
        {
            ViewBag.ProductId = productid;
            return View();
        }

        // POST: CommentsLocal/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(int productid, [Bind(Include = "Id,Stars,Opinion,Date")] Comment comment)
        {
            if (ModelState.IsValid)
            {
                comment.Date = DateTime.Now;
                Product product = db.Products.FirstOrDefault(x => x.Id == productid);
                db.Comments.Add(comment);
                if (product.Comments == null)
                {
                    product.Comments = new List<Comment>();
                }
                product.Stars = ((product.Stars * product.Comments.Count) + comment.Stars) / (product.Comments.Count + 1);
                product.Comments.Add(comment);
                db.SaveChanges();
                //return RedirectToAction("Index");
                return RedirectToAction("Details", "ProductsLocal", new { id = productid });
            }
            return View(comment);
            //return RedirectToAction("Details", "ProductsLocal", new { id = productid });
        }

        // GET: CommentsLocal/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // POST: CommentsLocal/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Stars,Opinion,Date")] Comment comment)
        {
            if (ModelState.IsValid)
            {
                db.Entry(comment).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(comment);
        }

        // GET: CommentsLocal/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Comment comment = db.Comments.Find(id);
            if (comment == null)
            {
                return HttpNotFound();
            }
            return View(comment);
        }

        // POST: CommentsLocal/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Comment comment = db.Comments.Find(id);
            db.Comments.Remove(comment);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
