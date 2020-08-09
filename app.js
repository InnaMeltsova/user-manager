const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('express-promise-router')();
const { MONGO_URI, PORT } = require('./constants');

const createUser = require('./routes/users/createUser');
const deleteUser = require('./routes/users/deleteUser');
const getUserById = require('./routes/users/getUserById');
const getUsers = require('./routes/users/getUsers');
const updateUser = require('./routes/users/updateUser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

app.use('/', router);

async function start() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1)
  }
}

start();
