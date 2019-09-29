using System;
using System.Json;
using System.Text;
using System.Collections.Generic;
using Npgsql;
using OwlLink.Classes;
namespace OwlLink.Classes {
    public class DatabaseConnector {
        public DatabaseConnector() {
        }

        public static NpgsqlConnection returnConnection() {
            return new NpgsqlConnection("Server=127.0.0.1;User Id=postgres;Password=owl-link;Database=owllink");
        }

        public static Boolean writeResourceToDb(Resource resource) {
            NpgsqlCommand resources_command = new NpgsqlCommand("INSERT INTO public.resources VALUES (@name,@description,@website,@address,@email,@phonenumber,@state,@city,@zipcode,@requirements)", returnConnection());
            NpgsqlCommand tagassign_command = new NpgsqlCommand("INSERT INTO public.tagassign VALUES (@resource_id, @tag_id)", returnConnection());
            resources_command.Parameters.AddWithValue("name", resource.Name);
            resources_command.Parameters.AddWithValue("description",resource.Description);
            resources_command.Parameters.AddWithValue("website",resource.Website);
            resources_command.Parameters.AddWithValue("address",resource.Address);
            resources_command.Parameters.AddWithValue("email",resource.Email);
            resources_command.Parameters.AddWithValue("phonenumber",resource.PhoneNumber);
            resources_command.Parameters.AddWithValue("state",resource.State);
            resources_command.Parameters.AddWithValue("city",resource.City);
            resources_command.Parameters.AddWithValue("zipcode",resource.Zipcode);
            resources_command.Parameters.AddWithValue("requirements",resource.Requirements);
            tagassign_command.Parameters.AddWithValue("resource_id",resource.Resource_Id);
            tagassign_command.Parameters.AddWithValue("tag_id", resource.Type_Id);
            int resource_rows = resources_command.ExecuteNonQuery();
            int tag_rows = tagassign_command.ExecuteNonQuery();
            if(resource_rows > 0 && tag_rows > 0) {
                return true;
            } else {
                return false;
            }
        }

        public static NpgsqlDataReader readResourcesFromDb(Resource resource) {
            StringBuilder sb = new StringBuilder();
            List<int> tag_ids = resource.Type_Id;
            foreach (int i in tag_ids) {
                sb.Append("tag_id ="+i+" OR ");
            }
            String trimmed_last = sb.ToString().Remove(sb.ToString().Length - 4, sb.ToString().Length);

            NpgsqlCommand resources_command = new NpgsqlCommand("SELECT resources.resource_id, resources.name, resources.description, resources.website, resources.address, resources.email, resources.phonenumber," +
                "resources.state, resources.city, resources.zipcode, resources.requirements FROM public.resources INNER JOIN tagassign ON (resources.resource_id = tagassign.resource_id)" +
                " WHERE "+trimmed_last+" GROUP BY resources.resource_id", returnConnection());
            NpgsqlDataReader reader = resources_command.ExecuteReader();
            return reader;
        }
    }
}
