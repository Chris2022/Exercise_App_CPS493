const bcrypt = require('bcrypt');
const list = [
    { 
        firstName: 'Chris',
        lastName: 'Tejada',
        handle: '@ctejada710',
        pic: 'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        password: 'tejada',
        isAdmin: true,
        emails: [
            "tejadac3@newpaltz.edu"
        ],
        following: [ { handle: '@vp', isApproved: true }, { handle: '@johnsmith', isApproved: true }, ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
];

module.exports.GetAll= function GetAll() { return list; }
module.exports.Get= user_id => list[user_id];
//returns a boolean if x.handle == handle the return is true, if not returns false
//what 
module.exports.GetByHandle = function GetByHandle(handle) { return ({ ...list.find( x => x.handle == handle ), password: undefined }); } 
//does some checking
module.exports.Add= function Add(user,cb) {
    if(!user.firstName){
        return Promise.reject({ code: 422, msg: "First Name is required" });
    }
    return bcrypt.hash(user.password,+process.env.SALT_ROUNDS)
    .then(hash =>{
        user.password = hash;
        list.push(user);
        //pass in null which means no error and pass the value we want passed out
        //so this is the equivalent to returning in the add.
        return { ...user, password: undefined };//this user object is returned to promise
        //promise will return it to the next then
    });
}


module.exports.Update = function Update(user_id, user) {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lastName){
        oldObj.lastName = user.lastName;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}
//delete user from list
module.exports.Delete= function Delete(user_id) {
    const user = list[user_id];
    list.splice(user_id, 1);//splice is delete in JS arrays
    return user;
}

module.exports.Login = function Login(handle, password){
    console.log({ handle, password})//debugging here
    const user = list.find(x=> x.handle == handle);// find user, if you find one then get password, if not
    //pass the error in asynchronous form
    //when we reject it is the equivalent of an error
    //we always have to return a promise
    if(!user) return Promise.reject({ code: 401, msg: "Sorry there is no user with that handle" });
    
    return bcrypt.compare(password,user.password)
        .then(result =>{
            //check the passowrd of the user and the password entered
            if( !result ){
                throw({ code: 401, msg: "Wrong Password" });
            }
            //if result is true, pull the password
            const data = { ...user, password: undefined };
            //return 
            return { user: data };
    });
}