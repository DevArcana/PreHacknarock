using System;
using Application.Infrastructure.Persistance;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;

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
                var connectionString = GetHerokuDBConnection() ??
                                       configuration.GetConnectionString("Database");

                options.UseNpgsql(connectionString);
            });

            using var scope = services.BuildServiceProvider().CreateScope();
            
            var dbContext = scope.ServiceProvider.GetService<AppDbContext>();
            dbContext.Database.Migrate();

            return services;
        }
        
        private static string? GetHerokuDBConnection()
        {
            var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

            if (databaseUrl == null)
            {
                return null;
            }
            
            var databaseUri = new Uri(databaseUrl);
            var userInfo = databaseUri.UserInfo.Split(':');

            var builder = new NpgsqlConnectionStringBuilder
            {
                Host = databaseUri.Host,
                Port = databaseUri.Port,
                Username = userInfo[0],
                Password = userInfo[1],
                Database = databaseUri.LocalPath.TrimStart('/')
            };

            return builder.ToString();
        }
    }
}