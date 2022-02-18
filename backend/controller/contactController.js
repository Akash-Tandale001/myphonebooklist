const contact = require('../module/contactModule');

const addContact=async(req,res)=>{    
    const data = await contact.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        mobile : req.body.mobile,
        photo: req.body.photo
    })
    res.status(200).json("User is added successfully");

}
const updateContact=async(req,res)=>{    
    const data = await contact.findById(req.param);
    await data.updateOne({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        mobile : req.body.mobile,
        photo: req.body.photo
    })
    res.status(200).json("User is updated successfully");

}
const delectContact=async(req,res)=>{
    const data = await contact.findById(req.param.id);
    if(!data){
        res.status(400);
    }
    await contact.deleteOne(data);
    res.status(200).json("Contact is removed successfully");
}


const getContact=async(req,res)=>{
    const data = await contact.find();
    res.status(200).json(data);
}

const searchContact=async(req,res)=>{
    const searchQuery = req.query.search && req.query.search.toLowerCase();
    const contactResult = await contact.find({
        $or:[
            {firstname : {$regex: searchQuery , $options:"i"}},
            {lastname  : {$regex: searchQuery , $options:"i"}}
        ]
    })
    res.status(200).json(contactResult);
}

module.exports = {getContact ,searchContact,addContact,updateContact,delectContact};