using System.Collections.Generic;

namespace Application.Common.Pagination
{
    public class PagedList<T>
    {
        public IEnumerable<T> Results { get; set; }
        
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int PageCount { get; set; }
        
        public int ItemsCount { get; set; }
        public int TotalItemsCount { get; set; }

        public bool HasNextPage { get; set; }
        public bool HasPreviousPage { get; set; }
    }
}