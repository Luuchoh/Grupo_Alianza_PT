

using Application.DTOs;
using Domain.Models;

namespace Application.Interfaces
{
    public interface IProduct { 
        Task<List<Product>> GetAll(); 
        Task<Product> GetById(int id); 
        Task<int> Add(ProductRequest producto); 
        Task Update(ProductRequest producto); 
        Task Delete(int id); }
}
