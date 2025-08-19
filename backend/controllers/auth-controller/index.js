import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const registerUser = async (req, res) => {
    try {
        const { userName, userEmail, password, role } = req.body;

        if (!userEmail || !userName || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All Fields Are Required"
            })
        }

        const normalEmail = userEmail.toLowerCase();

        const checkExistingUser = await User.findOne({
            $or: [{ userName }, { userEmail: normalEmail }],
        })

        if (checkExistingUser) {
            if (checkExistingUser.userName === userName) {
                return res.status(409).json({
                    success: false,
                    message: "Username Already Taken"
                })
            }
            if (checkExistingUser.userEmail === normalEmail) {
                return res.status(409).json({
                    success: false,
                    message: "Email Already Taken"
                })
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ userName, userEmail: normalEmail, role, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User Registered Successfully"
        })

    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({
            success: false,
            message: "Error During Registering User"
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { userEmail, password } = req.body;

        const checkExistingUser = await User.findOne({ userEmail })

        if (!checkExistingUser || !(await bcrypt.compare(password, checkExistingUser.password))) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })
        }

        const accessToken = jwt.sign({
            _id: checkExistingUser._id,
            userName: checkExistingUser.userName,
            userEmail: checkExistingUser.userEmail,
            role: checkExistingUser.role,
        }, process.env.JWT_SECRET, { expiresIn: '120m' })

        return res.status(200).json({
            success: true,
            message: "Logged In Successfully",
            data: {
                accessToken,
                user: {
                    _id: checkExistingUser._id,
                    userName: checkExistingUser.userName,
                    userEmail: checkExistingUser.userEmail,
                    role: checkExistingUser.role,
                }
            }
        })

    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({
            success: false,
            message: "Error During Login The User"
        })
    }
}

export default { registerUser, loginUser };
