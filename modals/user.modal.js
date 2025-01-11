const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        fullname : {
            firstname : {
                type : String,
                required : true,
                minlength : [3, "First name must be 3 letter long"]
            },
            lastname : {
                type : String,
                minlength : [3, "Last name must be 3 letter long"]
            },
        },
        email : {
            type : String,
            required : true,
            unique : true,
            minlength : [5, "email must be 5 letter long"]
        },
        password : {
            type : String,
            required : true,
            select : false
        },
    }
)

userSchema.methods.getAuthToken = ()=>{
    const token = jwt.sign(
        {_id : this._id},
        process.env.JWT_SECRET,
        {expiresIn : '1d'}
    )
    return token
}

userSchema.statics.hashPassword = (password)=>{
    const hash = bcrypt.hashSync(password, 10);
    return hash
}

userSchema.methods.comparePassword = (password)=>{
    const result = bcrypt.compareSync(password, this.password);
    return result
}

module.exports = mongoose.model('User', userSchema);