using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Domain.Notes.Models;
using Application.Infrastructure.Persistance;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Domain.Notes.Commands.UpdateNoteCommand
{
    public class UpdateNoteCommandHandler : IRequestHandler<UpdateNoteCommand, NoteUpdateDto?>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public UpdateNoteCommandHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<NoteUpdateDto?> Handle(UpdateNoteCommand request, CancellationToken cancellationToken)
        {
            var note = await _context.Notes.Where(x => x.Id == request.Id).FirstOrDefaultAsync(cancellationToken);

            if (note != null && !string.IsNullOrWhiteSpace(request.Content))
            {
                note.Content = request.Content;
                await _context.SaveChangesAsync(cancellationToken);
            }

            return _mapper.Map<NoteUpdateDto?>(note);
        }
    }
}
