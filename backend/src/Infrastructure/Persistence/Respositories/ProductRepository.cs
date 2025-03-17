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
        /// <summary>
        /// Trae la informacion todos los productos de la BD
        /// </summary>
        public async Task<List<Product>> GetAll()
        {
            var productos = await _context.Product.ToListAsync();
            return productos;
        }
        /// <summary>
        /// Trae la informacion de un producto en concreto
        /// </summary>
        /// <param name="id">id del producto</param>
        public async Task<Product> GetById(int id)
        {
            return await _context.Product.FindAsync(id);
        }
        /// <summary>
        /// Crea o agrega un producto al BD
        /// </summary>
        /// <param name="productoDto">Diccionario del producto a crear</param>
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
        /// <summary>
        /// Actualiza un producto
        /// </summary>
        /// <param name="id">id del producto</param>
        /// <param name="productoDto">Diccionario del producto a editar</param>
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
        /// <summary>
        /// Elimina un producto de la BD
        /// </summary>
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
