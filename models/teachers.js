module.exports = (mongoose) => {
  const teacherSchema =  mongoose.Schema({
    
      firstName: {
        type: 'String'
      },
      lastName: {
        type: 'String'
      },
      age: {
        type: 'Int32'
      },
      emailAddress: {
        type: 'String'
      },
      phoneNumber: {
        type: 'String'
      },
      availability: {
        type: [mongoose.SchemaTypes.Mixed]
      },
      password:{
        type:'String'
      }
    });

  return mongoose.model('teachers', teacherSchema)
};
