const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const router = express.Router()
const Admin = require('../../models/Admin')
const validator = require('../../validations/adminValidations')
const locationInAdminsController = require('../../controllers/locationController')
const roomController = require('../../controllers/roomController')
const memberController = require('../../controllers/memberController')
const auth = require('../auth');
const tokenKey = require('../../config/keys').secretOrKey
const passport = require('passport')
//------------------------------------------------------------------------------------------------------------

//search for an admin by his first name
router.post('/search',passport.authenticate('jwt', {session: false}), async (req,res)=>{
console.log('im in')
const input= req.body.searchInput
  
var result = await Admin.find(
    { $text: { $search: input } },
    { score: { $meta: "textScore" } }
 ).sort( { score: { $meta: "textScore" } } )
return res.json({data:result})

})


//member controller
router.get('/member/', memberController.getAllMember)
router.post('/member/', memberController.createMember)
router.put('/member/:id', memberController.updateMember)
router.delete('/member/:id', memberController.deleteMember)
router.get('/member/:id',memberController.findMember)




//get current admin for testing
router.get('/myInfo',passport.authenticate('jwt', {session: false}),async (req,res)=>{ 
  
    res.send({msg:req.user})
})

//show all admins
router.get('/',passport.authenticate('jwt', {session: false}),async (req, res) =>{
    const adminId = req.user._id;
    const admin = await  Admin.findById(adminId);
    if(admin){
    const admins = await Admin.find()
    return res.json({ data: admins })
}
return res.status(400).json({ msg: 'you are not allowed here ' });
} )
//get an admin by id
router.get('/:id',passport.authenticate('jwt', {session: false}),async (req, res) =>{
    if(await Admin.findById(req.user._id)){
        const adminId = req.params.id
    const admins = await Admin.findById(adminId)
    res.json({ data: admins })
    }
} )
//create an admin
router.post('/',passport.authenticate('jwt', {session: false}), async (req,res) => {
    try {
    var isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const { email, password ,firstName,middleName,lastName, age} = req.body;
    const admin = await Admin.findOne({ email });
		if (admin) return res.status(400).json({ email: 'Email already exists' });
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newAdmin = new Admin({
            firstName,
            middleName, 
            lastName,
            age,
            email,
            password: hashedPassword,
        });
        await Admin.create(newAdmin)
    
    res.json({ msg: 'Admin created successfully', data: newAdmin });
    }
    catch(error) {
        res.status(422).send({ error: 'Can not create admin',msg:error });
    }  
 })
  
 
 //login
 router.post('/login', async (req, res) => {   
    try {
		const { email, password } = req.body;
		const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).json({ email: 'Email does not exist' });
        const match = bcrypt.compareSync(password, admin.password);
        if (match) {
            const payload = {
                id: admin.id,
                type: 'admin',
                email: admin.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '3h' })
            console.log('loggin in')
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
    } catch (e) {

    }
}
);


//update an admin
 router.put('/:id',passport.authenticate('jwt', {session: false}), async (req,res) => {
    if(await Admin.findById(req.user._id)){  
      try {
        const id = req.params.id
        const admin = await Admin.findById(id)
        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const beforUpdate = await Admin.findByIdAndUpdate(id,req.body)
        updatedAdmin = await Admin.findById(id)
        res.json({msg: 'Admin updated',data: updatedAdmin})
       }
        catch(error) {
           // We will be handling the error later
           console.log(error)
       }
     } 
 })
 

// delete an admin
 router.delete('/:id',passport.authenticate('jwt', {session: false}), async (req,res) => {
    if(await Admin.findById(req.user._id)){

    
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
}  
 })




//Location controllers in Admins
router.get('/viewLocation/:id',locationInAdminsController.findLocation)
router.put('/updateLocation/:id',locationInAdminsController.updateLocation)
router.delete('/deleteLocation/:id',locationInAdminsController.deleteLocation)

// room filter
router.post('/searchroom',roomController.search)

module.exports = router
