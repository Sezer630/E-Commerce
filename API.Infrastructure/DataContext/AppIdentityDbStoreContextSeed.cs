using API.Core.DbModels.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace API.Infrastructure.DataContext
{
    public class AppIdentityDbStoreContextSeed
    {
        public static void  SeedUserAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Sezer",
                    Email = "goversuleyman@gmail.com",
                    UserName = "sezerakin",
                    Address = new Address
                    {
                        FirstName = "Sezer",
                        LastName = "Altıntaş",
                        Street = "1408 sokak",
                        City = "Antalya",
                        State = "TR",
                        ZipCode = "71000"
                    }
                };
                 userManager.CreateAsync(user, "Pa$sw0rddd");
            }
        }
    }
}
