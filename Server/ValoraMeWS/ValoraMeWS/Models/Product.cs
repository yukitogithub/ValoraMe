using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ValoraMeWS.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual int CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public float Stars { get; set; }
        public string Description { get; set; }
        public ApplicationUser User { get; set; }
        public string ImageUrl { get; set; }
        public virtual List<Social> Links { get; set; }
        public virtual List<Comment> Comments { get; set; }
    }
}