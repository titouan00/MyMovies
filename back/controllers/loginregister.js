const bcrypt = require('bcrypt');
const db = require("../database");
const jwt = require('jsonwebtoken')

// function jwtAuth(req, res, next){
//     let token = req.get('authorization')
//     if(token){
//         token = token.slice(7)
//         jwt.verify(token, process.env.ACCES_SECRET_TOKEN, (err, user) => {
//             if (err) {
//                 res.json({'message' :'Invalid token'})
//             }
//             else{
//                 req.user = user
//                 next()
//             }
//         })
//     }
//     else{
//         res.json({'message':'Acces denied'})
//     }
// }

exports.register = function (req, res) {
    const mail = req.body.mail
    //const password = req.body.password
    const password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(6))
    db.query(
        'SELECT * FROM users WHERE mail = ?', [mail],
        function(err, results) {
            res.send(results)
            if(results === ''){
                res.statusCode = 403
                res.json({'code':403, 'message':'mail already exist'})
            }
            else{
                db.query('INSERT INTO users(mail, password) values(?,?)', [mail, password], (error, results) => {
                    console.log(mail, password)
                    const user = {user : mail}
                    const accesToken = jwt.sign(user, process.env.ACCES_SECRET_TOKEN, {
                        expiresIn: "1h"
                    })
                    res.statusCode = 200
                    res.json({'code':200, 'message':'User has been created',token:accesToken})
                });
            }
        }
    )
}

exports.login = function (req, res) {
    const name = req.body.name
    const password = req.body.password


    const user = {user: name}


    const accesToken = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN)

    pool.query(
        `SELECT password FROM User WHERE name= ?`, [name],
        function (err, results) {
            dbpw = results[0].password
            if (dbpw == password) {
                res.json({token: accesToken})
            } else {
                res.send('password incorrect / name doen\'n exist')
            }
        }
    )
}



