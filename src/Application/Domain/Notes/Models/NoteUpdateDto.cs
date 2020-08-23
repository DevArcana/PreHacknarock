using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Infrastructure.AutoMapper;

namespace Application.Domain.Notes.Models
{
    public class NoteUpdateDto : IMapFrom<Note>
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
    }
}
