using System;
using Application.Infrastructure.Persistance;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper(typeof(Startup));
            services.AddMediatR(typeof(Startup));

            services.AddDbContext<AppDbContext>(options =>
            {
                var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL") ??
                                       configuration.GetConnectionString("Database");

                options.UseNpgsql(connectionString);
            });

            using var scope = services.BuildServiceProvider().CreateScope();
            
            var dbContext = scope.ServiceProvider.GetService<AppDbContext>();
            dbContext.Database.Migrate();

            return services;
        }
    }
}