const getStaffs = (input, callback) => {
    const staff = [
        { name :"Nihal",email :"nihal@gmail.com"},
         { name:"safa", email:"safa@gmail.com" },
         { name:"jasina", email:"jasina@gmail.com"}
    ]
    callback(200, {message :'',data:staff });
};
//status cod 200 300 400 500
module.exports =  getStaffs;