# upscallix-test

This is a backend system built on nodejs.

Before starting to run the project, make sure MySQL server is on, and install all dependencies.

Create a database named 'upscallix'.

Run this command to create tables on database and add some data into the table 'user'.

    cd config

    node migration.js



The system will send send a happy birthday message (represented with hitting an api) to users on their birthday at exactly 9 am on their local time.

There are three APIs on the system:

1. GET /users => get all user

2. POST /user => add a user

example body : {
    "email": "test1@test.com",
    "first_name": "Yoddi",
    "last_name": "Dahsyat",
    "birthday_date": "1997-11-20",
    "location": "Asia/Jakarta"
}

location format is based on the moment timezone format

3. DELETE /user/:id => delete a user
