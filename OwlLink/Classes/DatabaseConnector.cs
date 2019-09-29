using System;
using System.Json;
using System.Text;
using System.Collections.Generic;
using Npgsql;
using OwlLink.Classes;
using System.Diagnostics;

namespace OwlLink.Classes {
    public class DatabaseConnector {
        public DatabaseConnector() {
        }

        public static NpgsqlConnection returnConnection() {
            var conn =  new NpgsqlConnection("Host=127.0.0.1;Port=3306;User Id=postgres;Password=owl-link;Database=owllink");
            return conn;
        }

        public static Boolean writeResourceToDb(Resource resource) {
            NpgsqlConnection conn = returnConnection();
            conn.Open();
            try {
                NpgsqlCommand resources_command = new NpgsqlCommand("INSERT INTO public.resources (name, description, website, address, email, phonenumber, state, city, zipcode) VALUES (@name,@description,@website,@address,@email,@phonenumber,@state,@city,@zipcode)", conn);
                NpgsqlCommand tagassign_command = new NpgsqlCommand("INSERT INTO public.tagassign (resource_id, tag_id) VALUES (@resource_id, @tag_id)", conn);
                resources_command.Parameters.AddWithValue("name", resource.Name);
                resources_command.Parameters.AddWithValue("description", resource.Description);
                resources_command.Parameters.AddWithValue("website", resource.Website);
                resources_command.Parameters.AddWithValue("address", resource.Address);
                resources_command.Parameters.AddWithValue("email", resource.Email);
                resources_command.Parameters.AddWithValue("phonenumber", resource.PhoneNumber);
                resources_command.Parameters.AddWithValue("state", resource.State);
                resources_command.Parameters.AddWithValue("city", resource.City);
                resources_command.Parameters.AddWithValue("zipcode", resource.Zipcode);
                int resource_rows = resources_command.ExecuteNonQuery();
                if (resource_rows > 0) {
                    return true;
                } else {
                    return false;
                }
            } catch (Exception e) {
                Debug.WriteLine(e.Message);
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

        public static NpgsqlDataReader readPrimaryTagsFromDb() {

        }
    }
}
