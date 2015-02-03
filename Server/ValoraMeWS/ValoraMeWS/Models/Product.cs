using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ValoraMeWS.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public float Stars { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
        public string ImageUrl { get; set; }
        public List<Social> Links { get; set; }
        public List<Comment> Comments { get; set; }
    }
}