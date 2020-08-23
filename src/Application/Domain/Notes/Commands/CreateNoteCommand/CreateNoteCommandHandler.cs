using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Domain.Notes.Models;
using Application.Infrastructure.Persistance;
using AutoMapper;
using MediatR;

namespace Application.Domain.Notes.Commands.CreateNoteCommand
{
    public class CreateNoteCommandHandler : IRequestHandler<CreateNoteCommand, NoteDto?>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public CreateNoteCommandHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<NoteDto?> Handle(CreateNoteCommand request, CancellationToken cancellationToken)
        {
            var note = new Note(request.Title, DateTime.UtcNow);
            
            if (!string.IsNullOrWhiteSpace(request.Content))
            {
                note.Content = request.Content;
            }

            _context.Add(note);

            await _context.SaveChangesAsync(cancellationToken);
            return _mapper.Map<NoteDto>(note);
        }
    }
}