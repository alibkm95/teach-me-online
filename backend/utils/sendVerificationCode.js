const sendEmail = require('./sendEmail')

const sendVerificationEmail = async ({ name, email, verificationCode }) => {
  const verifyEmail = `${origin}?token=${verificationToken}&email=${email}`

  const message =
    `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; width: 100%">
      <p>You verification code is:</p>
      <p style="background-color: #059669; color: white; padding: 10px; border-radius: 5px; font-size: 25px">${verificationCode}</p>
      <p style="color: #e11d48;">Important: do not share this code with any one!</p>
    </div>
    `

  return sendEmail({
    to: email,
    subject: 'email varification',
    html: `<h4>hi there ${name} !</h4> ${message}`
  })
}

module.exports = sendVerificationEmail