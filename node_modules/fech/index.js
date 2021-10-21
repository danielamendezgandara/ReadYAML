module.exports = (typeof window !== 'undefined') && window.fetch
  ? window.fetch
  : require('node-fetch')
