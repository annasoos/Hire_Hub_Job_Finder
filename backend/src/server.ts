import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { User } from './model/users.schema';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connect } from "./config/database";

const server = express();
dotenv.config();
connect();

server.use(express.json());
server.use(cors({ origin: "http://localhost:3000" }));

// STATIC

server.use(express.static(path.resolve(__dirname, "../../frontend/build")));

// REFRESH ENDPOINTS

/* server.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});
----> NOT WORKING, WHY??? */

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

server.get("/find-a-job", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

server.get("/post-a-job", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

server.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

// GET JSON

server.get("/api/find-a-job", (req, res) => {
  res.sendFile(path.join(__dirname, "./assets", "jobs.json"));
});

// REGISTRATION

server.post("/api/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!(firstName && lastName && email && password)) {
    res.status(400).json({ msg: "Required data missing" });
  } else {
    User.findOne({ email }, async (error: object, doc: any) => {
      // a "doc" dobja vissza a választ, ha létezik már a bekapott email
      if (error) throw error;
      if (doc) res.status(409).json({ msg: "User already registered" });
      if (!doc) {
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPass,
        });

        await newUser.save();
        res.status(201).json({ msg: "User created" });
      }
    });
  }
});

// LOGIN

server.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.status(400).json({ msg: "Required data missing" });
  } else {
    const logUser = await User.findOne({ email });
    const logPass = await bcrypt.compare(password, logUser.password);

    if (logUser && logPass) {
      const token = jwt.sign(
        { user_id: logUser._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      logUser.token = token;

      console.log("Login successful", logUser);
      res.status(200).json({ msg: "User logged in", token });
    } else {
      res.status(409).json({ msg: "Email adress or password is incorrect" });
    }
  }
});

// LISTENING

const port = process.env.SERVER_PORT;

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
