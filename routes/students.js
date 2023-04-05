const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');

router.get('/', studentsController.getAll);

router.get('/:emailAddress', studentsController.getStudent);

router.post('/', studentsController.createStudent);

router.put('/:emailAddress', studentsController.updateStudent);

router.delete('/:emailAddress', studentsController.deleteStudent);

module.exports = router;


// const express = require('express');
// const router = express.Router();

// const userController = require('../controllers/user');

// router.get('/', userController.getAll);
// router.get('/:username', userController.getUser);
// router.post('/', userController.create);
// router.put('/:username', userController.updateUser);
// router.delete('/:username', userController.deleteUser);

// module.exports = router;