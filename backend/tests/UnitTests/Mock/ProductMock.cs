using Domain.Models;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace UnitTests.Mock
{
    public class ProductMock
    {
        /// <summary>
        /// Constructor del DBSet de productos en el contexto de la BD
        /// </summary>
        /// <param name="_mockContext">mock del context de la BD</param>
        public ProductMock(Mock<AplicationDbContext> _mockContext) 
        {

            Product expectedProduct = new Product()
            {
                Id = 1,
                Name = "Test",
                Description = "Test",
                Price = 12000,
                Stock = 5
            };

            var products = new List<Product>() { expectedProduct }.AsQueryable();

            // Setup for IQueryable
            var _mockDbSet = new Mock<DbSet<Product>>();
            _mockDbSet.As<IQueryable<Product>>().Setup(m => m.Provider).Returns(products.Provider);
            _mockDbSet.As<IQueryable<Product>>().Setup(m => m.Expression).Returns(products.Expression);
            _mockDbSet.As<IQueryable<Product>>().Setup(m => m.ElementType).Returns(products.ElementType);
            _mockDbSet.As<IQueryable<Product>>().Setup(m => m.GetEnumerator()).Returns(products.GetEnumerator());


            // Setup for IAsyncEnumerable
            _mockDbSet.As<IAsyncEnumerable<Product>>()
                    .Setup(m => m.GetAsyncEnumerator(It.IsAny<CancellationToken>()))
                    .Returns(new TestAsyncEnumerator<Product>(products.GetEnumerator()));

            _mockContext.Setup(c => c.Product).Returns(_mockDbSet.Object);
        }
    }

    // Clase auxiliar para implementar IAsyncEnumerator
    internal class TestAsyncEnumerator<T> : IAsyncEnumerator<T>
    {
        private readonly IEnumerator<T> _enumerator;

        public TestAsyncEnumerator(IEnumerator<T> enumerator)
        {
            _enumerator = enumerator;
        }

        public T Current => _enumerator.Current;

        public ValueTask<bool> MoveNextAsync()
        {
            return new ValueTask<bool>(_enumerator.MoveNext());
        }

        public ValueTask DisposeAsync()
        {
            _enumerator.Dispose();
            return new ValueTask();
        }
    }
}
