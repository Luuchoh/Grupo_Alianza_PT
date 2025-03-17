using Application.Interfaces;
using Infrastructure.Persistence;
using Infrastructure.Persistence.Respositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Infrastructure.Config;

public static class DependencyInjection
{
    /// <summary>
    /// Desacoplamiento de algunas dependencias
    /// </summary>
    /// <param name="configuration">Configuracion de builder - appsettings</param>
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<AplicationDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))); 
        services.AddScoped<IProduct, ProductoRepository>();
        return services; 
    }
}
