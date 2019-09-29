using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OwlLink.Classes;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OwlLink.Controllers {
    [Route("[controller]"), Route("/")]
    public class FrontendController : Controller {


        // GET: /
        [HttpGet]
        public string Get() {
            return "Big Dumb";
        }

        // GET /5
        [HttpGet("{id}")]
        public string Get(int id) {
            return "hey";
        }

        // POST /
        [HttpPost("resource")]
        public void Post([FromBody]Resource resource) {

        }

        // PUT /5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value) {
             
        }

        // DELETE /5
        [HttpDelete("{id}")]
        public void Delete(int id) {

        }
    }
}
