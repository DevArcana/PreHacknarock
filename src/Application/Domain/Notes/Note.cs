using System;
using Application.Domain.Entities;

namespace Application.Domain.Notes
{
    public class Note : BaseEntity
    {
        public string Title { get; private set; }
        public string? Content { get; set; }
        public DateTime CreatedAt { get; private set; }

        private Note()
        {
            // Needed by ef core
        }

        public Note(string title, DateTime createdAt)
        {
            Title = title;
            CreatedAt = createdAt;
        }
    }
}