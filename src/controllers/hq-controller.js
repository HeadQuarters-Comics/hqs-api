const database = require('../../db')
//const crypto = require('../services/crypto')

module.exports = {
    async index(req, res) {
        try{
            await database.connect()
            const result = await (await database.query("select * from hqs")).rows
            console.table(result)
            return res.status(200).json(result)
        }
        catch(error){
            console.log(`Error to get all hqs! ${error}`)
        }
    },
    
    //async create(req, res) {
    //    const {username, password} = req.body;
//
    //    let data = {};
//
    //    await database.connect()
//
    //    let user = await(await database.query(`select username, password from users where username = '${username}'`)).rows
    //    if(user.length <= 0) {
    //        data = {id: `user-${crypto.encrypt(username)}`, username, password: crypto.encrypt(password)};
    //        try{
    //            await database.query(`insert into users("id_user", "username", "password") values ('${data.id}', '${data.username}', '${data.password}');`)
    //            return res.status(200).json(data)
    //        }
    //        catch(error){
    //            console.log(`Error to create a new user! ${error}`)
    //            return res.status(500)
    //        }
    //    }else {
    //        return res.status(409).json(`User ${username} already exists`)
    //    }
    //},
//
    //async verify(req, res) {
    //    const {username, password} = req.body
//
    //    await database.connect()
//
    //    let user = await(await database.query(`select username, password from users where username = '${username}'`)).rows
//
    //    if(user.length > 0) {
    //        if(user[0].password == crypto.encrypt(password)) {
    //            return res.status(200).json()
    //        }else {
    //            return res.status(403).json("Incorrect password")
    //        }
    //    }else {
    //        return res.status(404).json(`That user doesn't exist`)
    //    }
    //},

}