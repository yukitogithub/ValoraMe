using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ValoraMeWS.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int Stars { get; set; }
        public string Comment { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
        public ApplicationUser User { get; set;}
    }
}
