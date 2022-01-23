const database = require('../../db')
//const crypto = require('../services/crypto')

module.exports = {
    async index(req, res) {
        try{
            //await database.connect()
            const result = await (await database.query("select * from hqs")).rows
            console.table(result)
            return res.status(200).json(result)
        }
        catch(error){
            console.log(`Error to get all hqs! ${error}`)
        }
    },

    async releases(req, res) {
        try{
            //await database.connect()
            const result = await (await database.query("select * from public.hqs order by add_date desc limit 5;")).rows
            console.table(result)
            return res.status(200).json(result)
        }
        catch(error){
            console.log(`Error to get hqs! ${error}`)
        }
    },

    async publishers(req, res) {
        try{
            //await database.connect()
            const result = await (await database.query("select distinct publisher from public.hqs")).rows
            console.table(result)
            return res.status(200).json(result)
        }
        catch(error){
            console.log(`Error to get publishers! ${error}`)
        }
    },

    async filtered(req, res) {
        const {publisher} = req.params
        try{
            //await database.connect()
            const result = await (await database.query(`select * from public.hqs where publisher = '${publisher.toUpperCase()}';`)).rows
            console.table(result)
            return res.status(200).json(result)
        }
        catch(error){
            console.log(`Error to get HQs! ${error}`)
        }
    },

}