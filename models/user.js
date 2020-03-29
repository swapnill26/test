// Export some model methods
exports.create = function (user, text, cb) {
    cb('12345')
}

// Get a particular comment
exports.get = function (name, cb) {
    cb(null, { name: name, text: "sample user" })
}

// Get all comments
exports.all = function (cb) {
    cb(null, [])
}

// Get all comments by a particular user
exports.allByUser = function (user, cb) {
    cb(null, [])
}