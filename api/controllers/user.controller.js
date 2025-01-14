import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res.json({
        message: "api route is working"
    });
}

export const updateUser = async (req, res, next) => {
    // Check if the user is trying to update their own account
    if (req.user.id !== req.params.id) return next(errorHandler(401, "You can only update your own account!"));

    try {
        // Hash the new password if it's being updated
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // Update the user in the database
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true }); // Returns the newly updated document

        // Check if the updatedUser is null (if the user was not found)
        if (!updatedUser) {
            return next(errorHandler(404, "User not found"));
        }

        // Destructure updatedUser to exclude the password field
        const { password, ...rest } = updatedUser._doc;

        // Send the updated user details back, excluding the password
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};