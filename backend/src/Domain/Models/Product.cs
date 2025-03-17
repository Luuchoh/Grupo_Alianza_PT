using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Domain.Models;

/// <summary>
/// Modelo o entidad usada para la creacion de la tabla en la BD
/// </summary>
public class Product
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public double Price { get; set; }
    public int Stock { get; set; }
}
