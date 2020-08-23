using System.Collections.Generic;
using Application.Domain.Notes.Models;
using MediatR;

namespace Application.Domain.Notes.Queries.ListNotesQuery
{
    public class ListNotesQuery : IRequest<IEnumerable<NoteDto>>
    {
        
    }
}