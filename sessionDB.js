const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('session.json')
const sessionDB = low(adapter)

module.exports = sessionDB