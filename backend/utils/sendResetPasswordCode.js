const sendEmail = require('./sendEmail')

const sendResetPasswordEmail = async ({ name, email, resetPasswordCode }) => {

  const message = 
    `
    <p>You reset password verification code is:</p>
    <p style="background-color: #059669; color: white; padding: 10px; border-radius: 5px; font-size: 25px; text-align: center; width: 200px">${resetPasswordCode}</p>
    <p style="color: #e11d48;">Important: do not share this code with any one!</p>
    `

  return sendEmail({
    to: email,
    subject: 'Reset Password',
    html: `<h3>Hi there ${name} !</h3> ${message}`
  })
}


module.exports = sendResetPasswordEmail