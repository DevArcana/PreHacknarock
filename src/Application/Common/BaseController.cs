using Microsoft.AspNetCore.Mvc;

namespace Application.Common
{
    [ApiController]
    [Route("api/rest/[controller]")]
    public abstract class BaseController : ControllerBase
    {
        
    }
}