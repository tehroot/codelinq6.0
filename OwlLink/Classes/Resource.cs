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
    }
}
