using System;
using System.Collections.Generic;
namespace OwlLink.Classes {
    public class Resource {
        public List<int> Resource_Id { get; set; }
        public List<int> Type_Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zipcode { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }

        public Resource() {

        }

        public Resource(List<int> resource_id, List<int> type_id, string name, string description, string address, string city, string state, int zipcode, int phonenumber, string email) {
            Resource_Id = resource_id;
            Type_Id = type_id;
            Name = name;
            Description = description;
            Address = address;
            City = city;
            State = state;
            Zipcode = zipcode;
            PhoneNumber = phonenumber;
            Email = email;
        }

        public Resource(List<int> resource_id, List<int> type_id) {
            Resource_Id = resource_id;
            Type_Id = type_id;
        }

        public Boolean createResource(Resource resource) {
            return DatabaseConnector.writeResourceToDb(resource);
        }

    }
}