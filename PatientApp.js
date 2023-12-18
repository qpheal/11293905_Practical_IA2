import express from "express"

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.listen(port, () => {
  console.log(`Server is running on 3000`);
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

// Read patients data from JSON file
const patientsFilePath = path.join(__dirname, 'patients.json');
let patients = [];

try {
  const data = fs.readFileSync(patientsFilePath, 'utf-8');
  patients = JSON.parse(data);
} catch (error) {
  console.error('Error reading patients file:', error.message);
}

// Define routes
app.get('/', (req, res) => {
  res.render('index', { patients });
});

app.post('/register', (req, res) => {
  const {
    patientId,
    surname,
    otherNames,
    gender,
    phoneNumber,
    residentialAddress,
    emergencyName,
    emergencyContact,
    relationship,
  } = req.body;

  // Check if the patient already exists
  const existingPatient = patients.find((p) => p.patientId === patientId);

  if (existingPatient) {
    return res.send('Patient already exists');
  }

  
  const newPatient = {
    patientId,
    surname,
    otherNames,
    gender,
    phoneNumber,
    residentialAddress,
    emergencyName,
    emergencyContact,
    relationship,
  };

  patients.push(newPatient);


  fs.writeFileSync(patientsFilePath, JSON.stringify(patients, null, 2), 'utf-8');

  res.redirect('/');
});



