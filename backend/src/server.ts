import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { User } from "./model/users.schema";
import { Job } from "./model/jobs.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connect } from "./config/database";

const server = express();
dotenv.config();
connect();

server.use(cors({ origin: "http://localhost:3000" }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// STATIC

server.use(express.static(path.resolve(__dirname, "../../frontend/build")));

// REFRESH ENDPOINTS

/*
server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
}); ---> HA EZT ADOM MEG A HERO ÉS A FIND A JOB OLDAL A FETCHNÉL ELHAL, MINTHA NEM ÉRNÉ EL A STATE-ET ".map is not a function"
*/

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});

server.get("/find-a-job", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});

server.get("/post-a-job", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});

server.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});


// GET ALL JOBS

server.get("/api/find-a-job", async (req, res) => {
	await Job.find({}, (error, data) => {
			if(error) throw error;
			if(data) {
				res.json({data});
			}
	})
});

// POST NEW JOB

server.post("/api/post-a-job", (req, res) => {
	const { position, company, level, location, skills, description } = req.body;
  const newJob = new Job({
    position,
    company,
		level,
		location,
		skills,
		description
  });

  newJob.save();
    res.status(200).json({ msg: "New job created" });
});

// REGISTRATION

server.post("/api/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!(firstName && lastName && email && password)) {
    res.status(400).json({ msg: "Required data missing" });
  } else {
    User.findOne({ email }, async (error: object, doc: any) => { // a "doc" dobja vissza a választ, ha létezik már a bekapott email
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
	try {
		const logUser = await User.findOne({ email });
		let logPass;
		if(logUser){
			logPass = await bcrypt.compare(password, logUser.password);
		}

		if (logUser && logPass) {
			const token = jwt.sign(
				{ user_id: logUser._id, email, firstName: logUser.firstName, lastName: logUser.lastName }, // I will get these when I decode the token
				process.env.TOKEN_KEY,
				{ expiresIn: "2h" });
			res.status(200).json({ msg: "User logged in", token, logUser });
		} else {
			res.status(409).json({ msg: "Email adress or password is incorrect" });
		}
	} catch (error) {
		console.log(error)
	}
});


// LISTENING

const port = process.env.SERVER_PORT;

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
