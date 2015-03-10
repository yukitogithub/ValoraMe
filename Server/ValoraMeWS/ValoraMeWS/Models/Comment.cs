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
        public string Opinion { get; set; }
        public DateTime Date { get; set; }
        public virtual ApplicationUser User { get; set;}
        public virtual Product Product { get; set; } //Cambiar en la bd del service!!!
    }
}
