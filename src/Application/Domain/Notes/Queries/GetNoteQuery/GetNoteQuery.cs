using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Domain.Notes.Models;
using MediatR;

namespace Application.Domain.Notes.Queries.GetNoteQuery
{
    public class GetNoteQuery : IRequest<NoteDetails?>
    {
        public int Id { get; set; }

        public GetNoteQuery(int id)
        {
            Id = id;
        }
    }
}
