const { format } = require('date-fns');

const formatDate = (date) => {
  return format(new Date(date), "MMMM d, yyyy 'at' h:mm a");
};

module.exports = { formatDate };
