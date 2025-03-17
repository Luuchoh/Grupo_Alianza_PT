using Application.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductoController : ControllerBase 
    { 
        private readonly IProduct _repository; 
        public ProductoController(IProduct repository) 
        {
            _repository = repository; 
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                List<Product> productList = await _repository.GetAll();
                return Ok(productList);
            } catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                Product product = await _repository.GetById(id);
                if (product == null) return NoContent();
                return Ok(product);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost] 
        public async Task<IActionResult> Create(Product producto) 
        {
            try
            {
                await _repository.Add(producto);
                return CreatedAtAction(nameof(GetById), new { id = producto.Id }, producto);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        } 

        [HttpPut("{id}")] 
        public async Task<IActionResult> Update(int id, Product producto) 
        {
            try
            {
                if (id != producto.Id) return BadRequest();
                await _repository.Update(producto);
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        } 
    
        [HttpDelete("{id}")] 
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _repository.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            
        } 
    }
}
