const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email must be provided.'],
    validate: {
      validator: validator.isEmail,
      message: 'please provide a valid email.'
    }
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: [true, 'full name must be provided']
  },
  profile: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    enum: {
      values: ['USER', 'INSTRUCTOR', 'ROOTADMIN'],
      message: '{VALUE} is not supported as a valid role'
    },
    default: 'USER'
  },
  password: {
    type: String,
    minlength: [8, 'password must be more than 8 characters'],
    required: [true, 'password must be provided']
  },
  verificationCode: String,
  verificationCodeExpirationDate: Date,
  resetPasswordCode: String,
  resetPasswordCodeExpirationDate: Date,
  isVerified: {
    type: Boolean,
    default: false
  },
  verifiedIn: Date,
  isBanned: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)

  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, salt)
  }

  if (this.isModified('verificationCode')) {
    this.verificationCode = await bcrypt.hash(this.verificationCode, salt)
  }

  if (this.isModified('resetPasswordCode')) {
    this.resetPasswordCode = await bcrypt.hash(this.resetPasswordCode, salt)
  }

})

// UserSchema.pre('remove', async function () {
//   try {
//     await Ticket.deleteMany({ user: this._id })
//     await Request.deleteMany({ user: this._id })
//     await Saved.deleteMany({ user: this._id })
//   } catch (error) {
//     console.log(error)
//   }
// })

UserSchema.methods.comparePassword = async function (insertedPassword) {
  const isMatch = await bcrypt.compare(insertedPassword, this.password)
  return isMatch
}

UserSchema.methods.compareVerificationCode = async function (insertedCode) {
  const isMatch = await bcrypt.compare(insertedCode, this.verificationCode)
  return isMatch
}

UserSchema.methods.compareResetCode = async function (insertedResetCode) {
  const isMatch = await bcrypt.compare(insertedResetCode, this.resetPasswordCode)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)