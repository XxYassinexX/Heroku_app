import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

export const signup = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      img: req.body.img,
      role: req.body.role,
    });
    await newUser.save();
    res
      .status(200)
      .send({ sucess: `the user ${newUser.firstname} created with sucess` });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "unable to create new  user" }] });
  }
};
export const signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ error: "Email or pwd is wrong" });
  const pwd = user.password;
  const validPwd = await bcrypt.compare(req.body.password, pwd);
  if (!validPwd)
    return res.status(400).send({ error: "Email or pwd is wrong" });
  // Token creation
  try {
    const token = await jwt.sign(
      {
        firstname: user.firstname,
        id: user._id,
        role: user.role,
      },
      process.env.JWTSIGN,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).header("auth-token", token).send(token);
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "login failed" }] });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = User.findById(req.userid, (err, user) => {
      if (err) console.log("err", err);
      else {
        res.status(200).json({ user });
      }
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "unable to get the  user" }] });
  }
};
export const updateUser = async (req, res) => {
  var { firstname, lastname, email, password , img } = req.body;
  if (password && password !== "") {
    var hashedPassword = await bcrypt.hash(password, 10);
  }

  if ((firstname == "")) firstname = undefined;
  if ((lastname == "")) lastname = undefined;
  if ((password == "")) password = undefined;
  if ((email == "")) email = undefined;
  if ((img == "")) img = undefined;

  try {
    console.log("img" , img)
    User.findByIdAndUpdate(
      req.userid,
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword,
        img: img,
      },
      (err, updatedUser) => {
        if (err) {
          console.log(err);
        } else {
          res
            .status(200)
            .send({ sucess: `the user ${updatedUser} updated with sucess` });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "unable to get  the  user" }] });
  }
};
export const deleteUser = async (req, res) => {
  try {
    User.findByIdAndDelete(
      req.body.id,

      (err, userdeleted) => {
        if (err) {
          console.log(err);
        } else {
          res
            .status(200)
            .send({ sucess: `the user ${userdeleted} deleted with sucess` });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "unable to update the  user" }] });
  }
};

export const getUsers = async (req, res) => {
  try {
    User.find((err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({ sucess: users });
      }
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "unable to get the  users" }] });
  }
};
