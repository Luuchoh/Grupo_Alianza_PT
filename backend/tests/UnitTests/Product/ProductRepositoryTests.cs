using Domain.Models;
using Infrastructure.Persistence;
using Infrastructure.Persistence.Respositories;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using UnitTests.Mock;

namespace UnitTests.ProductRepository;

public class ProductoRepositoryTests {

    private readonly Mock<AplicationDbContext> _mockContext;
    private readonly ProductoRepository _repository; 
    private ProductMock _productMock;

    /// <summary>
    /// Setup de los mocks, inicializacion de los mock
    /// </summary>
    public ProductoRepositoryTests()
    {
        _mockContext = new Mock<AplicationDbContext>();
        _productMock = new ProductMock(_mockContext);
        _repository = new ProductoRepository(_mockContext.Object);
    }

    /// <summary>
    /// Prueba unitaria con los productos mockeado retornando todos los datos del mock
    /// </summary>
    [Fact] 
    public async Task GetAll_ShouldReturnAllProductos() 
    { 

        var result = await _repository.GetAll(); 
        
        Assert.Equal(1, result.Count); 
    }
}

