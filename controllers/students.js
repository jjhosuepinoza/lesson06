const db = require('../models');
const Student = db.student;
const passwordStudent = require ('../util/passComplex');


module.exports.createStudent =  (req, res) => {
 

try{
  

  if (!req.body.emailAddress|| !req.body.password) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const password = req.body.password;
  const passwordCheck = passwordStudent.passwordPass(password);
  if (passwordCheck.error) {
    res.status(400).send({ message: passwordCheck.error });
    return;
  }

  
  const student = new Student(req.body);
  student
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the student.'
      });
    });
    
} catch (err) {
res.status(500).json(err);
}
};



module.exports.getAll = (req, res) => {
 
  try{

  
  Student.find({})

    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving students.'
      });
    });
    
  } catch (err){
res.status(500).json(err);
  }
};


module.exports.getStudent = (req, res) => {

  try{
  const emailAddress = req.params.emailAddress;

  Student.find({ emailAddress: emailAddress })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving students.'
      });
    });
} catch(err){
  res.status(500).json(err);
}  
};


module.exports.updateStudent = async (req, res) => {
  try {
    const emailAddress = req.params.emailAddress;
    if (!emailAddress) {
      res.status(400).send({ message: 'Invalid Email Supplied' });
      return;
    }
    const password = req.body.password;
    const passwordCheck = passwordStudent.passwordPass(password);
    if (passwordCheck.error) {
      res.status(400).send({ message: passwordCheck.error });
      return;
    }
    
    Student.findOne({ emailAddress: emailAddress}, function (err, student) {
      student.emailAddress = req.params.emailAddress;
      student.password = req.body.password;
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      student.age = req.body.age;
      student.phoneNumber = req.body.phoneNumber;
      student.studentStatus = req.studentStatus;
      student.emergencyName = req.body.emergencyName;
      student.emergencyPhone = req.body.emergencyPhone;
      student.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Some error occurred while updating the student.');
        } else {
          res.status(204).send();
        }
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports.deleteStudent = async (req, res) => {
  try {
    const emailAddress = req.params.emailAddress;
    if (!emailAddress) {
      res.status(400).send({ message: 'Invalid email address Supplied' });
      return;
    }

    Student.deleteOne({emailAddress: emailAddress }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the student.');
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the student information.');
  }

};