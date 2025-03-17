using Application.DTOs;
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
            } 
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno: {e.Message}");
            }
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id) 
        {
            try
            {
                Product product = await _repository.GetById(id);
                if (product == null) return NotFound();
                return Ok(product);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno: {e.Message}");
            }
        }
        
        [HttpPost] 
        public async Task<IActionResult> Create([FromBody] ProductRequest productoDTO) 
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                var id = await _repository.Add(productoDTO);

                productoDTO.Id = id;    
                
                return Created($"api/producto/{productoDTO.Id}", productoDTO);
                
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno: {e.Message}");
            }
        } 
        
        [HttpPut("{id}")] 
        public async Task<IActionResult> Update(int id, [FromBody] ProductRequest productoDTO) 
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                if (id != productoDTO.Id) 
                    return BadRequest("El ID en la ruta no coincide con el ID del producto");
                    
                await _repository.Update(productoDTO);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno: {e.Message}");
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
                return StatusCode(500, $"Error interno: {e.Message}");
            }
        } 
    }
}