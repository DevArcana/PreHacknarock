using System;
using Application.Infrastructure.AutoMapper;

namespace Application.Domain.Notes.Models
{
    public class NoteDto : IMapFrom<Note>
    {
        public string Title { get; set; } = null!;
        public string? Content { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}