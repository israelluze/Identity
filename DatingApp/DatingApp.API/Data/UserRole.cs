using DatingApp.API.Models;
using Microsoft.AspNetCore.Identity;

namespace DatingApp.API.Data
{
    public class UserRole : IdentityUserRole<int>
    {
       public User User { get; set; } 
       public Role Role { get; set; }
    }
}