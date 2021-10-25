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
module.exports.Add= function Add(user) {
    if(!user.firstName){
        throw { code: 422, msg: "First Name is required" }
    }
     list.push(user);
     //returns user but not the password
     return { ...user, password: undefined };
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
    //then throw an error
    if(!user) throw { code: 401, msg: "Sorry there is no user with that handle" };
    //check the passowrd of the user and the password entered
    if( ! (password == user.password) ){
        throw { code: 401, msg: "Wrong Password" };
    }
    //send user data back to user but not the password.
    const data = { ...user, password: undefined };

    return { user: data };
}