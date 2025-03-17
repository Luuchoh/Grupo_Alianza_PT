

using Domain.Models;

namespace Application.Interfaces
{
    public interface IProduct { 
        Task<List<Product>> GetAll(); 
        Task<Product> GetById(int id); 
        Task Add(Product producto); 
        Task Update(Product producto); 
        Task Delete(int id); }
}
