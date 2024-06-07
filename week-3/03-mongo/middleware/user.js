const {User}= require('../db/index')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    let user= User.findOne({
        username,
        password
    })
    if(user){
        console.log("user exists");
        next();
    }else{
        res.status(401).json({
            msg:"user not Exists"
        })
    }

}

module.exports = userMiddleware;