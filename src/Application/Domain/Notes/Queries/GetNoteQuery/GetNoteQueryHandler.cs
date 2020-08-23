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

namespace Application.Domain.Notes.Queries.GetNoteQuery
{
    public class GetNoteQueryHandler : IRequestHandler<GetNoteQuery, NoteDetails?>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public GetNoteQueryHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<NoteDetails?> Handle(GetNoteQuery request, CancellationToken cancellationToken)
        {
            var note = await _context.Notes.AsNoTracking()
                                     .ProjectTo<NoteDetails?>(_mapper.ConfigurationProvider)
                                     .FirstAsync(cancellationToken);

            return note;
        }
    }
}
