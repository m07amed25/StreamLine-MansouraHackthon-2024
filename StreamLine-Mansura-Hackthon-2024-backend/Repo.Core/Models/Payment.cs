using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Core.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public int BookingId { get; set; }
        public Booking Booking { get; set; } 
        public DateTime PaymentDate { get; set; }
        public string PaymentMethod { get; set; } // Credit Card, PayPal, etc.
        public string Status { get; set; } // Paid, Pending, Failed
    }
}
