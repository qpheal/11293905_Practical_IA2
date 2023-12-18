


# Electronic Medical Record System

This project is an implementation of an Electronic Medical Record System for the University of Ghana Medical Center (UGMC). The system is designed to meet the following functional requirements:

1. The front-desk executive should be able to register patients who do not already exist (Patient ID, Surname, Othernames, Gender, Phone Number, Residential Address, Emergency Name, Contact and RelationShip with Patient)
2. The front-desk executive should be able to start an encounter (visitation) for a patient (Patient ID, Date and Time, Type of Encounter [Emergency/OPD/Specialist  Care]).
3. The nurse should be able to submit information on patient vitals (Blood Pressure / Temperature / Pulse / SP02)
4. The doctor should be able to view a list of patients
5. The doctor should be able to view the details of a specific patient

## Tech Stack

The tech stack used at Polymorph Labs Ghana Limited for backend development is NodeJS with the Express Framework for building REST APIs and MongoDB for persisting data. 

## Endpoints

The following endpoints have been created to meet the functional requirements:

1. `POST /patients`: This endpoint is used to register new patients. The request body should contain the following fields: `surname`, `othernames`, `gender`, `phone_number`, `residential_address`, `emergency_name`, `emergency_contact`, and `relationship_with_patient`. The response will contain the newly created patient ID.

2. `POST /encounters`: This endpoint is used to start a new encounter for a patient. The request body should contain the following fields: `patient_id`, `date`, `time`, and `type_of_encounter`. The response will contain the newly created encounter ID.

3. `POST /vitals`: This endpoint is used to submit patient vitals. The request body should contain the following fields: `patient_id`, `blood_pressure`, `temperature`, `pulse`, and `sp02`. The response will contain the newly created vital ID.

4. `GET /patients`: This endpoint is used to retrieve a list of all patients.

5. `GET /patients/:id`: This endpoint is used to retrieve the details of a specific patient. The `:id` parameter should be replaced with the patient ID.

