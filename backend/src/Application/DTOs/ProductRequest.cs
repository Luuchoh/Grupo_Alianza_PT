namespace Application.DTOs
{
    /// <summary>
    /// Representa la solicitud de datos para la creación o actualización de un producto.
    /// </summary>
    public class ProductRequest
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
        public int Stock { get; set; }
    }
}

