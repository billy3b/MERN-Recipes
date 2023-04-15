import express from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';

const router = express.Router();

router.post("/login",async(req,res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if(!user){
        return res.json({message:"User Doesn't exist"});
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.json({message:"username or password is incorrect"})
    }

    const token = jwt.sign({id:user._id}, "secret");
    res.json({token,userID:user._id});

});

export {router as loginRouter}


export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      jwt.verify(authHeader, "secret", (err) => {
        if (err) {
          return res.sendStatus(403);
        }
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };