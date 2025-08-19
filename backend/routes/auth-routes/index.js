import express from 'express';
import authController  from '../../controllers/auth-controller/index.js';
import authenticate from '../../middlewares/auth-middleware.js';

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/check-auth', authenticate, (req, res) => {
    const user = req.user;

    res.status(200).json({
        success: true,
        message: "Authenticated User",
        data: {
            user
        }
    })
})

export default router;
