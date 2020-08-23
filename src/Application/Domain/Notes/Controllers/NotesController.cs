﻿using System.Threading.Tasks;
using Application.Common;
using Application.Domain.Notes.Commands.CreateNoteCommand;
using Application.Domain.Notes.Queries.ListNotesQuery;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Application.Domain.Notes.Controllers
{
    public class NotesController : BaseController
    {
        private readonly IMediator _mediator;

        public NotesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> CreateNote([FromBody] CreateNoteCommand command)
        {
            try
            {
                return Ok(await _mediator.Send(command));
            }
            catch
            {
                return BadRequest();
            }
        }
        
        public async Task<IActionResult> ListNotes([FromBody] ListNotesQuery query)
        {
            try
            {
                return Ok(await _mediator.Send(query));
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}