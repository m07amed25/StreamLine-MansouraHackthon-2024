using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Core.Models
{
    public class Guide
    {
        public int GuideId { get; set; }
        public string Name { get; set; }
        public string Language { get; set; }
        public decimal PricePerDay { get; set; }
        public string Bio { get; set; } 
        public List<Booking> Bookings { get; set; } 
    }
}
