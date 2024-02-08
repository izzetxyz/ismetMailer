const sql = require('mssql');

const config = {
  user: "sa",
  password:  "A+1197!",
  database: "ConceptCar",
  server: "185.131.49.118",
  port: 19955,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
};

// model for consumer
const Consumer = {
  create: async function(data) {
    try {
      const pool = await sql.connect(config);
      const request = pool.request();

      const query = `
        INSERT INTO Consumer (Username, userID, NameSurname, PhoneNumber, Email, Password, Adress, Vehicles)
        VALUES (@Username, @userID, @NameSurname, @PhoneNumber, @Email, @Password, @Adress,  @Vehicles);
      `;

      request.input('Username', sql.NVarChar(50), data.Username);
      request.input('userID', sql.NVarChar(50), data.userID);
      request.input('NameSurname', sql.NVarChar(100), data.NameSurname);
      request.input('PhoneNumber', sql.NVarChar(50), data.PhoneNumber);
      request.input('Email', sql.NVarChar(100), data.Email);
      request.input('Password', sql.NVarChar(100), data.Password);
      request.input('Adress', sql.NVarChar(500), data.Adress);
      request.input('Vehicles', sql.NVarChar(500), JSON.stringify(data.Vehicles));

      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
      console.log(err);
    }
  }
};


module.exports = { Consumer };
