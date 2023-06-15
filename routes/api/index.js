const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtsRoutes');

//tell express to make code from userRoutes available by searching /users or /thoughts in insomnia/localhost request
router.use('/users', userRoutes);

router.use('/thoughts', thoughtRoutes);

module.exports = router;