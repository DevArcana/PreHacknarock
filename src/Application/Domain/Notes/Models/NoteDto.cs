﻿using System;
using Application.Infrastructure.AutoMapper;

namespace Application.Domain.Notes.Models
{
    public class NoteDto : IMapFrom<Note>
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
    }
}