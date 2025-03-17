

using Application.DTOs;
using Domain.Models;

namespace Application.Interfaces
{
    /// <summary>
    /// Interface del repositorio que hace las consultas a la DB
    /// </summary>
    public interface IProduct { 
        Task<List<Product>> GetAll(); 
        Task<Product> GetById(int id); 
        Task<int> Add(ProductRequest producto); 
        Task Update(ProductRequest producto); 
        Task Delete(int id); }
}
