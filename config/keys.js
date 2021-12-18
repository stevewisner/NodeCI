if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'ci' || (process.env.CI && process.env.CI.includes(['true', true]))) {
  module.exports = require('./ci');
} else {
  module.exports = require('./dev');
}
