using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ValoraMeWS.Models
{
    public class ProductRequest
    {
        public Product Product { get; set; }
        public List<Social> Socials { get; set; }
    }
}