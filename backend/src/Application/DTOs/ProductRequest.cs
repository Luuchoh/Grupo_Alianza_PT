﻿namespace Application.DTOs
{
    public class ProductRequest
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
        public int Stock { get; set; }
    }
}

