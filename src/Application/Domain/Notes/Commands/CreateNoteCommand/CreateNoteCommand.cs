using Application.Domain.Notes.Models;
using MediatR;

namespace Application.Domain.Notes.Commands.CreateNoteCommand
{
    public class CreateNoteCommand : IRequest<NoteDto?>
    {
        public string Title { get; set; } = null!;
        public string? Content { get; set; }
    }
}