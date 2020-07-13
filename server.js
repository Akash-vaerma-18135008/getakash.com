var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    sendMail = require("./functions/email");

app.use(express.static("public"));
app.use(express.static("imgs"));
app.use(bodyParser.urlencoded({ extended: "true" }));
app.set("view engine", "ejs");


app.get("/", (req,res)=>{
    res.render("home", { active: "home" });
})
app.get("/aboutme", (req,res)=>{
    res.render("aboutPage", { active: "aboutme" });
})
app.get("/projects", (req,res)=>{
    res.render ("projectsPage", {active: "projects"});
})
app.post("/sendmail", (req,res)=>{
    console.log(req.body.mailinfo.email);
    let mailOptions1={
        from: "akashverma.mec18@itbhu.ac.in",
        to: "akashverma.mec18@itbhu.ac.in",
        subject: "From Portfolio website",
        html: "<h1>"+ req.body.mailinfo.name +"</h1> <h3>"+ req.body.mailinfo.email +"</h3> <p>"+ req.body.mailinfo.description +"</p>"
    };
    let mailOptions2={
        from: "akashverma.mec18@itbhu.ac.in",
        to: req.body.mailinfo.email,
        subject: "Automated email from Akash Verma",
        html: "<h1>Thanks!</h1><p>I have recieved your email. ThankYou for showing the interest</p>"
    };
    sendMail(mailOptions1);
    sendMail(mailOptions2);
    res.redirect("/#ctct");
})

app.listen( process.env.port || 3000, ()=>{
    console.log("server started!");
})

    // <% - include("partials/header") %>