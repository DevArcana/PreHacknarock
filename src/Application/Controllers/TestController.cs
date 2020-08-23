using System;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet("{env}")]
        public IActionResult GetEnvVar(string env)
        {
            return Ok(Environment.GetEnvironmentVariable(env));
        }
    }
}