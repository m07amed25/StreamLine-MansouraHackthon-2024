using Microsoft.EntityFrameworkCore;
using Repo.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.EF
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<TripPackage> TourPackages { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Guide> Guides { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<CarRental> CarRentals { get; set; }
        public DbSet<Payment> Payments { get; set; }
    }
}
