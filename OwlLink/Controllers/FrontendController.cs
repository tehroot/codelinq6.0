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
        public string Get([FromBody]Resource resource) {
            return "Hello world";
        }

        [HttpGet("resources/{id}")]
        public string Get(int id) {
            return "AAAA";
        }

        // POST /
        [HttpPost("resource")]
        public String Post([FromBody]Resource resource) {
            List<int> types = resource.Type_Id;

            if (resource.createResource(resource, types)) {
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
