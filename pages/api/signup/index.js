import { dbConnect } from "../../../lib/db-connect";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import {
  errorHandler,
  responseHandler,
  validateAllOnce,
} from "../../../utils/common";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // return error
    errorHandler("Kardeşim sadece post işlemleri için kullan bunu", res);
  } 
  else {
    try {
       
      const { name, email, password } = req.body;
  
      validateAllOnce(req.body);

      await dbConnect();

      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({
        ...req.body,
        password: hashPassword,
      });

      const saveUser = await user.save();
      console.log(saveUser)
      if (saveUser) {
        const userDoc = saveUser._doc;
        delete userDoc.password;
        responseHandler(userDoc, res, 201);
      } else {
        errorHandler("Something went wrong", res);
      }
    } catch (error) {
        console.log("catch çalıştıı")
      errorHandler(error, res);
    }
  }
}
