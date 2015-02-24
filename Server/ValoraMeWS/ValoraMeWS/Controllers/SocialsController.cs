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
    public class SocialsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Socials
        public IQueryable<Social> GetSocials()
        {
            return db.Socials;
        }

        // GET: api/Socials/5
        [ResponseType(typeof(Social))]
        public IHttpActionResult GetSocial(int id)
        {
            Social social = db.Socials.Find(id);
            if (social == null)
            {
                return NotFound();
            }

            return Ok(social);
        }

        // PUT: api/Socials/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSocial(int id, Social social)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != social.Id)
            {
                return BadRequest();
            }

            db.Entry(social).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SocialExists(id))
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

        // POST: api/Socials
        [ResponseType(typeof(Social))]
        public IHttpActionResult PostSocial(Social social)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Socials.Add(social);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = social.Id }, social);
        }

        // DELETE: api/Socials/5
        [ResponseType(typeof(Social))]
        public IHttpActionResult DeleteSocial(int id)
        {
            Social social = db.Socials.Find(id);
            if (social == null)
            {
                return NotFound();
            }

            db.Socials.Remove(social);
            db.SaveChanges();

            return Ok(social);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SocialExists(int id)
        {
            return db.Socials.Count(e => e.Id == id) > 0;
        }
    }
}