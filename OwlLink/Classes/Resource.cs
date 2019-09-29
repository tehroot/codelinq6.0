using System;
namespace OwlLink.Classes {
    public class Resource {
        public int Resource_Id { get; set; }
        public int Type_Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zipcode { get; set; }
        public string Email { get; set; }

        public Resource() {

        }

        public Resource(int resource_id, int type_id, string name, string description, string address, string city, string state, int zipcode, string email) {
            Resource_Id = resource_id;
            Type_Id = type_id;
            Name = name;
            Description = description;
            Address = address;
            City = city;
            State = state;
            Zipcode = zipcode;
            Email = email;
        }

        public Resource(int resource_id, int type_id) {
            Resource_Id = resource_id;
            Type_Id = type_id;
        }


    }
}