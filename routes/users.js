const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/users');

// router.get('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: {},
//     message: '',
//   });
// });

router.route('/').get(getUsers);

module.exports = router;
