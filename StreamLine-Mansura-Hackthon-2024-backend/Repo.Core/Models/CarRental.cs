using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Core.Models
{
    public class CarRental
    {
        public int CarRentalId { get; set; }
        public string CarModel { get; set; }
        public decimal PricePerDay { get; set; }
        public decimal PricePerHours { get; set; }
        public string Location { get; set; }
        public List<Booking> Bookings { get; set; } 
    }
}
