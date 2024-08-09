
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdusd-osps4-constants-2.cjs.production.min.js')
} else {
  module.exports = require('./sdusd-osps4-constants-2.cjs.development.js')
}
