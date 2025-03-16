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
    

    public ProductoRepositoryTests()
    {
        _mockContext = new Mock<AplicationDbContext>();
        _productMock = new ProductMock(_mockContext);
        _repository = new ProductoRepository(_mockContext.Object);
    }


    [Fact] 
    public async Task GetAll_ShouldReturnAllProductos() 
    { 

        var result = await _repository.GetAll(); 
        
        Assert.Equal(1, result.Count); 
    }
}

