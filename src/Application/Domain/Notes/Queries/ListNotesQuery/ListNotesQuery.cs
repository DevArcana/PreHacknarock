using System.Collections.Generic;
using Application.Common.Pagination;
using Application.Domain.Notes.Models;
using MediatR;

namespace Application.Domain.Notes.Queries.ListNotesQuery
{
    public class ListNotesQuery : PaginationOptions, IRequest<PagedList<NoteDto>>
    {
        
    }
}