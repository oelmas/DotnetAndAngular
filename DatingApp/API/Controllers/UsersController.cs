using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


//[DebuggerDisplay($"{{{nameof(GetDebuggerDisplay)}(),nq}}")]
public class UsersController(DataContext context): BaseApiController
{
    
    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        return await context.Users.ToListAsync();
    }

    [Authorize]
    [HttpGet("{id:int}")] // /api/users/3
    public async Task<ActionResult<AppUser>> GetUser(int id)
    {
        return await context.Users.FindAsync(id);
    }

}