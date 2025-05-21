const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

function randomCity() {
  const cities = ["Roma", "Milano", "Napoli", "Torino", "Firenze"];
  return cities[Math.floor(Math.random() * cities.length)];
}

function randomStreet() {
  const streets = ["Garibaldi", "dei Mille", "della Conciliazione", "Toledo", "Vittorio Emanuele II"];
  return streets[Math.floor(Math.random() * streets.length)];
}

function randomDomain() {
  const domains = ["gmail.com", "outlook.com", "live.com"];
  return domains[Math.floor(Math.random() * domains.length)];
}

// /api/authCallback
app.get('/api/authCallback', (req, res) => {
  console.log('Received authentication callback with query:', req.query);
  res.status(200).send('Authentication successful, now you can close this window');
});

// /api/generateRandomUser
app.post('/api/generateRandomUser', (req, res) => {
  const nationalities = ["Italian", "German", "Spanish", "French", "Dutch"];
  const gender = Math.random() < 0.5 ? "Male" : "Female";

  const name = req.body.name || '';
  const surname = req.body.surname || '';
  console.log('Received request to generate random user with Name:', name, 'and Surname:', surname);
  if (!name || !surname) {
    return res.status(400).send('Name and Surname are required.');
  }

  const randomUser = {
    Name: name.charAt(0).toUpperCase() + name.slice(1),
    Surname: surname.charAt(0).toUpperCase() + surname.slice(1),
    Email: `${name.toLowerCase()}.${surname.toLowerCase()}${Math.floor(Math.random() * 99) + 1}@${randomDomain()}`,
    Address: `Via ${randomStreet()} ${Math.floor(Math.random() * 199) + 1}, ${randomCity()}`,
    PhoneNumber: `+39 3${Math.floor(Math.random() * 89) + 10} ${Math.floor(Math.random() * 9000000) + 1000000}`,
    Gender: gender,
    Nationality: nationalities[Math.floor(Math.random() * nationalities.length)],
    BirthDate: (() => {
      const now = new Date();
      const yearsAgo = Math.floor(Math.random() * 62) + 18; // 18-79
      const days = Math.floor(Math.random() * 365);
      const birth = new Date(now.getFullYear() - yearsAgo, now.getMonth(), now.getDate());
      birth.setDate(birth.getDate() + days);
      return birth.toISOString().slice(0, 10);
    })(),
    Username: `${name.toLowerCase()[0]}${surname.toLowerCase()}${Math.floor(Math.random() * 899) + 100}`
  };

  console.log('Generated user:', JSON.stringify(randomUser));
  res.status(200).json(randomUser);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
