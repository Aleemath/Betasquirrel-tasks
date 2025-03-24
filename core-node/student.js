const getStudents = (input, callback) => {
    const students = [
        { name :"Nidhun",email :"nidhun@gmail.com"},
         { name:"Nimisha", email:"nimisha@gmail.com" },
         { name:"Fasna", email:"fasna@gmail.com"}
    ]
    callback(200, {message :'',data:students  });
};
//status cod 200 300 400 500
module.exports =  getStudents;