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

        public static Boolean writeResourceToDb(Resource resource, List<int> types) {

            NpgsqlConnection conn = returnConnection();

            conn.Open();

            int rowAffected = 0;

            try {

                NpgsqlCommand resources_command = new NpgsqlCommand("INSERT INTO public.resources (name, description, website, address, email, phonenumber, state, city, zipcode) VALUES (@name,@description,@website,@address,@email,@phonenumber,@state,@city,@zipcode) RETURNING resource_id", conn);

                resources_command.Parameters.AddWithValue("name", resource.Name);

                resources_command.Parameters.AddWithValue("description", resource.Description);

                resources_command.Parameters.AddWithValue("website", resource.Website);

                resources_command.Parameters.AddWithValue("address", resource.Address);

                resources_command.Parameters.AddWithValue("email", resource.Email);

                resources_command.Parameters.AddWithValue("phonenumber", resource.PhoneNumber);

                resources_command.Parameters.AddWithValue("state", resource.State);

                resources_command.Parameters.AddWithValue("city", resource.City);

                resources_command.Parameters.AddWithValue("zipcode", resource.Zipcode);

                Object row = resources_command.ExecuteScalar();

                Debug.WriteLine(row);

                for(int i = 0; i < types.Count; i++) {

                    NpgsqlCommand tagassign_command = new NpgsqlCommand("INSERT INTO public.tagassign (resource_id, tag_id) VALUES (@resource_id, @tag_id)", conn);

                    tagassign_command.Parameters.AddWithValue("resource_id",int.Parse(row.ToString()));

                    tagassign_command.Parameters.AddWithValue("tag_id", types[i]);

                    rowAffected = tagassign_command.ExecuteNonQuery();

                }

                if (rowAffected > 0) {

                    return true;

                } else {

                    return false;

                }

            } catch (Exception e) {

                Debug.WriteLine(e.Message);

                return false;

            }

        }

        public static List<Resource> readResourcesFromDb(Resource resource) {

            NpgsqlConnection conn = returnConnection();

            conn.Open();

            StringBuilder sb = new StringBuilder();

            List<Resource> listResources = new List<Resource>();

            List<int> reference_id = new List<int>();

            List<int> tag_ids = resource.Type_Id;

            string x = "SELECT resources.resource_id,resources.name,resources.website,resources.description,resources.email,resources.phonenumber,resources.state,resources.city,resources.zipcode FROM public.resources INNER JOIN tagassign on public.resources.resource_id = public.tagassign.resource_id and public.tagassign.tag_id="+tag_ids[0];

            if (tag_ids.Count > 1) {

                for (int i = 1; i < tag_ids.Count; i++) {

                    x = x + ("INNER JOIN public.tagassign t" + i + " on resources.resource_id= t" + i + ".resource_id and t" + i + ".tag_id="+resource.Type_Id[i]);

                }

            }

            x = x + ("WHERE public.resources.state = 'FED' or public.resources.state = '"+resource.State+"'");

            NpgsqlCommand resources_command = new NpgsqlCommand(x, conn);

            NpgsqlDataReader reader = resources_command.ExecuteReader();

            while (reader.Read()) {

                Resource new_resource = new Resource(Convert.ToInt32(reader[0].ToString()), reader[1].ToString(), reader[2].ToString(), reader[3].ToString(), reader[4].ToString(), reader[5].ToString(), reader[6].ToString(), reader[7].ToString(), reader[8].ToString());

                listResources.Add(new_resource);

            }

            conn.Close();

           

            return listResources;

        }

        public static Dictionary<int, String> readPrimaryTagsFromDb() {

            Dictionary<int, String> keyValuePair = new Dictionary<int, String>();

            try {

                NpgsqlConnection conn = returnConnection();

                NpgsqlCommand npgsqlCommand = new NpgsqlCommand("SELECT tag_id, tag_name FROM public.Tags");

                NpgsqlDataReader reader = npgsqlCommand.ExecuteReader();

                while (reader.HasRows) {

                    keyValuePair.Add(int.Parse(reader[0].ToString()), reader[1].ToString());

                }

                return keyValuePair;

            } catch (Exception e) {

                Debug.WriteLine(e.Message);

                return null;

            }

        }

    }

}