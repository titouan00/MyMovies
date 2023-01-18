const controllerlogin = require("./controllers/loginregister")

module.exports = function (app) {
    app.route('/register')
        .post(controllerlogin.register)

    app.route('/login')
        .post(controllerlogin.login)
}