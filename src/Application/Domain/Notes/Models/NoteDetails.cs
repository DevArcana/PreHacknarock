using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Infrastructure.AutoMapper;

namespace Application.Domain.Notes.Models
{
    public class NoteDetails : IMapFrom<Note>
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? Content { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
