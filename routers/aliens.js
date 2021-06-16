const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

//I want handle of alien.js file in this file
const Alien = require('../models/alien')

//this fetch data from the database and then send it to the client
router.get('/', async(req, res) => {
    try {

        //I save all the data coming from the database into aliens constant
        const aliens = await Alien.find()
        res.json(aliens)

    } catch (err) {
        res.send('Error' + err)
    }
})

//for fetching particular data
router.get('/:id', async(req, res) => {
    try {
        //I save all the data coming from the database into aliens constant
        const alien = await Alien.findById(req.params.id) //we get an id in url so params
        console.log(alien);
        res.json(alien)

    } catch (err) {
        res.send('Error' + err)
    }
})

//for creating data in the data base so for that you have to send the data from the client side 
router.post('/', async(req, res) => {
    //create a object that accepts all the values coming from the client
    const alien = new Alien({
        //this is fetching the data which coming from the client side
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        //now we want to save the data which coming from the client into the database 
        const a1 = await alien.save()
            //and this same data sending to the client so client can see something 
        res.json(a1)


    } catch (err) {
        res.send('Error')
    }

})
router.patch('/:id', async(req, res) => {
    try {
        //first we get the particular data in which we want to change 
        const alien = await Alien.findById(req.params.id)
            //the data that I change have to paas from  client side and that data change there  
        alien.sub = req.body.sub
            //then want to save the data
        const a1 = await alien.save()
        res.json(a1)



    } catch (err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        //first we get the particular data in which we want to change 
        const alien = await Alien.findById(req.params.id)
            //the data that I change have to paas from  client side and that data change there  
        const a1 = await alien.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error' + err)
    }
})

module.exports = router