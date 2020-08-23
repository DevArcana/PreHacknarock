using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Pagination
{
    public static class PaginationExtensions
    {
        public static async Task<PagedList<T>> Paginate<T>(this IQueryable<T> queryable, PaginationOptions options, CancellationToken cancellationToken)
        {
            var page = options.Page;
            var pageSize = options.PageSize;

            if (page < 1)
            {
                throw new ArgumentException("Page must be greater or equal 0", nameof(options.Page));
            }
            
            if (pageSize < 1)
            {
                throw new ArgumentException("PageSize must be greater or equal 0", nameof(options.PageSize));
            }

            var results = await queryable
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync(cancellationToken);
            
            var totalItemsCount = await queryable.CountAsync(cancellationToken);

            var pageCount = (int) Math.Ceiling((double) totalItemsCount / pageSize);

            return new PagedList<T>()
            {
                Page = page,
                PageSize = pageSize,
                Results = results,
                ItemsCount = results.Count,
                TotalItemsCount = totalItemsCount,
                PageCount = pageCount,
                HasPreviousPage = page > 1,
                HasNextPage = page < pageCount
            };
        }
    }
}