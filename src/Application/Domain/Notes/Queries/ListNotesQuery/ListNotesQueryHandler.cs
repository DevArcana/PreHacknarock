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

namespace Application.Domain.Notes.Queries.ListNotesQuery
{
    public class ListNotesQueryHandler : IRequestHandler<ListNotesQuery, IEnumerable<NoteDto>>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ListNotesQueryHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        public async Task<IEnumerable<NoteDto>> Handle(ListNotesQuery request, CancellationToken cancellationToken)
        {
            var notes = await _context.Notes
                .AsNoTracking()
                .ProjectTo<NoteDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return notes;
        }
    }
}