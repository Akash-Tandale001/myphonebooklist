const router = require('express').Router();
const {getContact ,searchContact ,addContact , updateContact,delectContact} = require('../controller/contactController')

router.get("/",getContact);

router.post("/" , addContact);

router.put("/:id" , updateContact);

router.delete("/:id" , delectContact);

router.get("/contact" , searchContact);

module.exports = router;