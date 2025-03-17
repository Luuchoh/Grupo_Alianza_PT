using Application.DTOs;
using FluentValidation;

namespace Application.Validators
{
    /// <summary>
    /// Validaciones para el DTO productRequest
    /// </summary>
    public class ProductValidator : AbstractValidator<ProductRequest>
    {
        public ProductValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Nombre es requerido")
                .MinimumLength(2).WithMessage("Nombre demasiado corto")
                .MaximumLength(50).WithMessage("Nombre demasiado largo");

            RuleFor(x => x.Description)
                .NotEmpty().WithMessage("Descripción es requerida")
                .MinimumLength(5).WithMessage("Descripción demasiado corta")
                .MaximumLength(500).WithMessage("Descripción demasiado larga");

            RuleFor(x => x.Price)
                .NotEmpty().WithMessage("Precio es requerido")
                .GreaterThan(0).WithMessage("El precio debe ser positivo");

            RuleFor(x => x.Stock)
                .NotEmpty().WithMessage("Stock es requerido")
                .GreaterThanOrEqualTo(0).WithMessage("El stock no puede ser negativo")
                .Must(x => x == (int)x).WithMessage("El stock debe ser un número entero");
        }
    }
}
