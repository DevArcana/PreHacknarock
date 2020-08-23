using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Domain.Notes.Models;
using MediatR;

namespace Application.Domain.Notes.Commands.UpdateNoteCommand
{
    public class UpdateNoteCommand : IRequest<NoteUpdateDto?>
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
    }
}
