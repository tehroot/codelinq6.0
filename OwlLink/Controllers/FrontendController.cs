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
        Resource resource = new Resource();


        // GET: /
        [HttpGet]
        public string Get() {
            return "Hello world";
        }

        // GET /resource
        [HttpGet("resources")]
        public string Get([FromBody]Resource resource) {
            return "";
        }

        [HttpGet("resources/{id}")]
        public string Get([FromBody] Resource resource) {

        }

        // POST /
        [HttpPost("resource")]
        public String Post([FromBody]Resource resource) {
            if (resource.createResource(resource)) {
                return "Success";
            } else {
                return "False";
            }
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
