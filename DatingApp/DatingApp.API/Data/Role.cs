using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace DatingApp.API.Data
{
    public class Role : IdentityRole<int>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}