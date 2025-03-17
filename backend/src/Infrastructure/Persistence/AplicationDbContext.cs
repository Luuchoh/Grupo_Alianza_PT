using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;
using System.Xml.Linq;

namespace Infrastructure.Persistence
{
    /// <summary>
    /// Contexto de la base de datos utilizado por EF
    /// </summary>
    public class AplicationDbContext : DbContext
    {
        public virtual DbSet<Product> Product { get; set; }
        public AplicationDbContext() { }
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Product>(producto =>
            {
                producto.ToTable("Producto");
                producto.HasKey(p => p.Id);
                producto.Property(p => p.Id)
                        .ValueGeneratedOnAdd();
                producto.Property(p => p.Name).IsRequired().HasMaxLength(40);
                producto.Property(p => p.Description).IsRequired().HasMaxLength(150);
                producto.Property(p => p.Price).IsRequired();
                producto.Property(p => p.Stock).IsRequired();
            });
        }
    }
}
