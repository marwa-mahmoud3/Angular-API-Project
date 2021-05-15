using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using IdentityOAuth.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace IdentityOAuth.Controllers
{
    public class UserModelsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/UserModels
      

        // GET: api/UserModels/5
        [ResponseType(typeof(UserModel))]
    

       

        // POST: api/UserModels
        [HttpPost]
        public async Task<IHttpActionResult> registration(UserModel account)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                UserStore<IdentityUser> store =
                    new UserStore<IdentityUser>(new ApplicationDbContext());

                UserManager<IdentityUser> manager =
                    new UserManager<IdentityUser>(store);
                IdentityUser user = new IdentityUser();
                user.UserName = account.Name;
                user.Email = account.Name;
                user.PasswordHash = account.Password;
                Cart c = new Cart() { UserID = user.Id };

        IdentityResult result = await manager.CreateAsync(user, account.Password);
                if (result.Succeeded)
                {
                    //string locat = Url.Link("DefaultApi", new { })
                    return Created("", "register Sucess " + user.UserName);
                }
                else
                    return BadRequest((result.Errors.ToList())[0]);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

 

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

       
     
    }
}
