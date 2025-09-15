const { format } = require('date-fns');

const formatDate = (date) => {
  return format(new Date(date), "MMMM d, yyyy 'at' h:mm a");
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isStrongPassword = (password) => {
  return password.length >= 8;
};

module.exports = {
  formatDate,
  isValidEmail,
  isStrongPassword,
};