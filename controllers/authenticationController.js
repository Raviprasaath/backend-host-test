
const mongoose = require('mongoose');
const authenticationModel = require('../models/authenticationModel')

const getUserDetail = async (req, res) => {
    try {
        const allDetails = await authenticationModel.find({user_id: req.user.id});
        res.status(200).json(allDetails);
    } catch (e) {
        res.status(400).json({ error: e.message })
    };
}

const addingUserDetail = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).send("All fields are mandatory !");
        }

        const contact = await authenticationModel.create({ name, email, phone,  });
        res.status(201).json(contact);
    } catch (e) {
        res.send(400).json({error: "Something went wrong"})
    }
};

const getSingleUserDetail = async (req, res) => {    
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: "User Not Found"})
        }
        const user = await authenticationModel.findById(id);
        res.status(200).json(user);        
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const updateUserDetail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("Update failed!");
    }
    const user = await authenticationModel.findByIdAndUpdate(
        {
        _id: id,
        },{
            ...req.body
        }
    );
    res.status(201).json(user);
};
const deleteUserDetail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("Id not valid !");
    }
    const user = await authenticationModel.findByIdAndDelete(id);
    res.status(201).json(user);
};





module.exports = { getUserDetail, addingUserDetail, getSingleUserDetail, updateUserDetail, deleteUserDetail }












// Old way

// const addingUserDetail = async (req, res) => {
//     const { name, email, phone } = req.body;
//     if (!name || !email || !phone) {
//         res.status(400).json({ message: "All fields mandatory" })
//     }
//     try {
//         const user = await authenticationModel.create({ name, email, phone });
//         res.status(200).json(user);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// }

