import User from '../mongodb/models/user.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).limit(req.query._end);

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        // get data from request
        const {name, email, avatar } = req.body;

        // process to users existing
        const userExist = await User.findOne({ email });

        if (userExist) return res.status(200).json(userExist);

        // if the userExist is false, then continous the process to create syntax.
        const newUser = await User.create({
            name,
            email,
            avatar
        });

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
};
const getUserInfoByID = async (req, res) => {
    try {
        // there's the parameter contain id, then we should to catch this id into new variabel
        const { id } = req.params;

        // after get id from parameter, let's get the user data with all table property that have relation
        const user = await User.findOne({ _id: id}).populate("allProperties");

        if (user) {
            res.status(200).json(user);
        }else{
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(500).json({message: error.message });
    }
};

export {
    getAllUsers,
    createUser,
    getUserInfoByID
}