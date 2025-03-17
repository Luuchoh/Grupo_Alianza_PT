# Consulte https://aka.ms/customizecontainer para aprender a personalizar su contenedor de depuración y cómo Visual Studio usa este Dockerfile para compilar sus imágenes para una depuración más rápida.

# Esta fase se usa cuando se ejecuta desde VS en modo rápido (valor predeterminado para la configuración de depuración)
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER /app
WORKDIR /app
EXPOSE 7276
EXPOSE 7277

# Imagen base para compilar
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copiar solución y proyectos
COPY backend.sln .
COPY ["src/WebAPI/WebAPI.csproj", "src/WebAPI/"]
COPY ["src/Application/Application.csproj", "src/Application/"]
COPY ["src/Domain/Domain.csproj", "src/Domain/"]
COPY ["src/Infrastructure/Infrastructure.csproj", "src/Infrastructure/"]

# Restaurar paquetes
RUN dotnet restore "src/WebAPI/WebAPI.csproj"

# Copiar el código fuente
COPY . .

# Compilar y publicar la aplicación
WORKDIR /src
RUN dotnet publish src/WebAPI/WebAPI.csproj -c Release -o /app/publish

# Imagen final para ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "WebAPI.dll"]