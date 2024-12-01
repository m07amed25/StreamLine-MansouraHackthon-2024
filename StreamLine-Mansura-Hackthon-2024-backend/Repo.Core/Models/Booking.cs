using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Core.Models
{
    public class Booking
    {
        public int BookingId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } 

        public int TourPackageId { get; set; }
        public TripPackage TripPackage { get; set; } 

        public int? GuideId { get; set; }
        public Guide Guide { get; set; } // Optional, if a guide is assigned

        public int? HotelId { get; set; }
        public Hotel Hotel { get; set; } // Optional, if a hotel is booked

        public int? CarRentalId { get; set; }
        public CarRental CarRental { get; set; } // Optional, if a car rental is booked

        public decimal TotalAmount { get; set; }
        public DateTime BookingDate { get; set; }
        public string Status { get; set; } // Pending, Confirmed, Cancelled
    }
}
