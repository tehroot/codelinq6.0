using System;
using System.Json;
using Npgsql;
namespace OwlLink.Classes {
    public class DatabaseConnector {
        public DatabaseConnector() {

            static NpgsqlConnection returnConnection() {
                return new NpgsqlConnection("Server=127.0.0.1;User Id=postgres;Password=owl-link;Database=owllink");
            }

            static Boolean writeResourceToDb() {
                throw new NotImplementedException();
            }

            static NpgsqlDataReader readResourcesFromDb() {
                throw new NotImplementedException();
            }
        }
    }
}
