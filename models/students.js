module.exports = (mongoose) => {
    const Students = mongoose.model(
      'students',
      mongoose.Schema(
        {
            "firstName": {
              "type": "String"
            },
            "lastName": {
              "type": "String"
            },
            "age": {
              "type": "Int32"
            },
            "emailAddress": {
              "type": "String"
            },
            "phoneNumber": {
              "type": "String"
            },
            "studentStatus": {
              "type": "String"
            },
            "emergencyName": {
              "type": "String"
            },
            "emergencyPhone": {
              "type": "String"
            },
            "password":{
              "type":"String"
            }
            
          })
    );

return Students;

};