const express = require("express");
const { sendEmail } = require("./helpers/sendEmail");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const App = express();

App.use(cors());
App.use(express.json());

App.get("/test", (req, res) => {
  res.send("response from axios");
});
App.post("/send", (req, res) => {
  try {
    const { name, mobileNumber, email, message } = req.body;
    console.log(req.body);
    const emailData = {
      from: "ikouma269@gmail.com", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
      to: "info@redpositive.in", // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE YOUR GMAIL
      subject: "Contact Form",
      text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
      html: `
          <h4>Email received from contact form:</h4>
          <p>Sender name: ${name}</p>
          <p>phone number :${mobileNumber}</p>
          <p>Sender email: ${email}</p>
          <p>Sender message: ${message}</p>
          
          <hr />
          <p>This email may contain sensitive information</p>
         
      `,
    };
    sendEmail(req, res, emailData);
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

const PORT = process.env.PORT;
App.listen(PORT, () => {
  console.log(`server is runing in port ${PORT} `);
});
