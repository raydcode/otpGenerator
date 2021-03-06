

/**
 * Generate password from allowed length
 */
 const digits = '0123456789'
 function rand (min, max) {
   const random = Math.random()
   return Math.floor(random * (max - min) + min)
 }
 
 module.exports = {
   /**
    * Generate OTP of the length
    * @param  {number} length length of password.
    */
   otp: function (length) {
     length = length || 10
 
     const allowsChars = (digits) 
     let password = ''
     while (password.length < length) {
       const charIndex = rand(0, allowsChars.length - 1)
       password += allowsChars[charIndex]
     }
     return password
   }
 
 }
 