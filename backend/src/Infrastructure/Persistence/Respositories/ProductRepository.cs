using Application.DTOs;
using Application.Interfaces;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Respositories
{
    public class ProductoRepository : IProduct
    { 
        private readonly AplicationDbContext _context;

        public ProductoRepository(AplicationDbContext context) 
        {
            _context = context; 
        }
        public async Task<List<Product>> GetAll()
        {
            var productos = await _context.Product.ToListAsync();
            return productos;
        }
        public async Task<Product> GetById(int id)
        {
            return await _context.Product.FindAsync(id);
        }

        public async Task<int> Add(ProductRequest productoDto) 
        {
            Product producto = new Product
            {
                Name = productoDto.Name,
                Description = productoDto.Description,
                Price = productoDto.Price,
                Stock = productoDto.Stock
            };
            _context.Product.Add(producto); 
            await _context.SaveChangesAsync();

            return producto.Id;
        } 
        public async Task Update(ProductRequest productoDto) 
        {
            Product producto = new Product
            {
                Name = productoDto.Name,
                Description = productoDto.Description,
                Price = productoDto.Price,
                Stock = productoDto.Stock
            };
            _context.Product.Update(producto); 
            await _context.SaveChangesAsync();
        } 
        public async Task Delete(int id) 
        { 
            var producto = await _context.Product.FindAsync(id); 
            if (producto != null) 
            { 
                _context.Product.Remove(producto); 
                await _context.SaveChangesAsync(); 
            }
        }
    }
}
