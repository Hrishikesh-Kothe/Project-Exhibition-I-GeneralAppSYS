import { format } from 'date-fns';

export const formatDate = (date) => {
  return format(new Date(date), "MMMM d, yyyy 'at' h:mm a");
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isStrongPassword = (password) => {
  return password.length >= 8;
};