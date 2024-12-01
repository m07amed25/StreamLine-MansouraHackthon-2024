using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Core.Models
{
    public class TripPackage
    {
        public int TripPackageId { get; set; }
        public string TripName { get; set; }    
        public string TripDescription { get; set; }
        public decimal TripPrice { get; set; }

        public int DurationDays { get; set; } 
        public string Location { get; set; }
        public List<Booking> Bookings { get; set; } 
    }
}
