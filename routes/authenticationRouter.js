const express = require('express');
const router = express.Router();

const { getUserDetail, addingUserDetail, getSingleUserDetail, updateUserDetail, deleteUserDetail } = require('../controllers/authenticationController');

router.get('/', getUserDetail);
router.post('/', addingUserDetail);
router.get('/:id', getSingleUserDetail);
router.patch('/:id', updateUserDetail);
router.delete('/:id', deleteUserDetail);


module.exports = router;