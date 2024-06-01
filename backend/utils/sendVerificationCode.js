const sendEmail = require('./sendEmail')

const sendVerificationEmail = async ({ name, email, verificationCode }) => {

  const message =
    `
    <p>You verification code is:</p>
    <p style="background-color: #059669; color: white; padding: 10px; border-radius: 5px; font-size: 25px; text-align: center; width: 200px">${verificationCode}</p>
    <p style="color: #e11d48;">Important: do not share this code with any one!</p>
    `

  return sendEmail({
    to: email,
    subject: 'email varification',
    html: `<h4>hi there ${name} !</h4> ${message}`
  })
}

module.exports = sendVerificationEmail