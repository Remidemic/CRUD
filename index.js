const express = require("express");
const app = express();
// Requiring and Initializing Express

const User = require("./models/users");
const School = require("./models/Schools");
const Todo = require("./models/Todos");
const Career = require("./models/careers");
const Vacation = require("./models/Vacations");
const mongoose = require("mongoose");
// --->Create Mongo SCHEMA*



const methodOverride = require("method-override");

// --->Override setting for CRUD methods​
require("dotenv").config();
// ---> Link our ENV variables to our app

// ---> link css javascript
app.use(express.static('public'));
//tells express to try to match requests with files in the directory called 'public'


// ------------------------------------------[StepOne]

app.set("view engine", "jsx");
// ------> Creates Link to JSX
app.engine("jsx", require("express-react-views").createEngine());
// -----> Links JSX/ReactViews to App

app.use(express.urlencoded({ extended: false }));
// --->Parse Req.Body

app.use(methodOverride("_method"));
// --->Instantiates MethodOverride for CRUD actions

app.use((req, res, next) => {
    console.log("I am only here,for the routes");
    next();
});
// -----> Establishes Middleware Process

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});
// --------->Middleware


// ------------------------------------------[StepTwo]

// --------->Routes {CRUD}

// -----USER ROUTES -------------//
// test route
app.get("/", (req, res) => {
        res.send('<h1>it works</h1>');
    })
    // --------->Index [Dashboard/ShowAll]
app.get("/users", (req, res) => {
    User.find({}, (err, allusers) => {
        console.log(err);

        res.render("Index_User", {
            users: allusers,
        });
    });
});
// --------->New  [C]
app.get("/users/new", (req, res) => {
    res.render("New_User", {});
});
// --------> POST
app.post("/users", (req, res) => {
    if (req.body.lookingForNewJob === "on") {
        req.body.lookingForNewJob = true;
    } else {
        req.body.lookingForNewJob = false;
    }
    User.create(req.body, (err, createdUser) => {
        console.log(err);
        console.log("Just Added : ", createdUser);
    });
    res.redirect("/users");
});
// -------> Edit
app.get("/users/:id/edit", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        //findLog
        console.log(err)
        if (!err) {
            res.render("Edit", {
                user: foundUser,
                //pass in the foundLog so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
// --------->PUT/PATCH [U]
app.put("/users/:id", (req, res) => {
    if (req.body.lookingForNewJob === "on") {
        req.body.lookingForNewJob = true;
    } else {
        req.body.lookingForNewJob = false;
    }
    User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
        console.log(err)
        console.log(updatedUser);
        res.redirect(`/users/${req.params.id}`);
    });
});
// ------>DELETE   [D]
app.delete("/users/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/users");
    });
});
// --------> SEEDS*
app.get("/users/seed", (req, res) => {
    console.log(User);
    User.create(
        [{
                username: "Remy",
                password: "Remy",
                desiredrole: "chief software engineer",
                lookingForNewJob: true,
            },
            {
                username: "Joe",
                password: "Joe",
                desiredrole: "chief software engineer",
                lookingForNewJob: true,
            },
        ],
        (err, data) => {
            res.redirect("/users");
        }
    );
});

// --------->Show [R]
app.get("/users/:id", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        console.log(err)
        console.log("Found: ", foundUser);
        res.render("Show_user", {
            user: foundUser,
        });
    });
});


// Schools routes ---- 


// --------->Index SCHOOL [Dashboard/ShowAll]
app.get("/schools", (req, res) => {
    School.find({}, (err, allschools) => {
        console.log(err);

        res.render("Index_School", {
            schools: allschools,
        });
    });
});

// --------->New schools  [C]
app.get("/schools/new_school", (req, res) => {
    res.render("New_school", {});
});

// --------> POST schools
app.post("/schools", (req, res) => {
    req.body.tuition = +req.body.tuition
    School.create(req.body, (err, createdSchool) => {
        console.log(err);
        console.log("Just Added : ", createdSchool);
    });
    res.redirect("/schools");
});

// -------> Edit SCHOOL
app.get("/schools/:id/edit", (req, res) => {
    School.findById(req.params.id, (err, foundSchool) => {
        //findLog
        console.log(err)
        if (!err) {
            res.render("edit_school", {
                school: foundSchool,
                //pass in the foundLog so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});

// --------->PUT/PATCH SCHOOL [U]
app.put("/schools/:id", (req, res) => {

    School.findByIdAndUpdate(req.params.id, req.body, (err, updatedSchool) => {
        console.log(err)
        console.log(updatedSchool);
        res.redirect(`/schools/${req.params.id}`);
    });
});
// ------>DELETE SCHOOL  [D]
app.delete("/schools/:id", (req, res) => {
    School.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/schools");
    });
});
// --------> Schools SEED*
app.get("/schools/seed", (req, res) => {
    console.log(School);
    School.create(
        [{
                schoolname: "BMCC",
                program: "Business admin",
                tuition: "3000",

            },
            {
                schoolname: "CUNY city college",
                program: "Philosophy",
                tuition: "3000",
            },
            {
                schoolname: "NYU",
                program: "art",
                tuition: "60,000",
            },
        ],
        (err, data) => {
            res.redirect("/schools");
        }
    );
});

// --------->Show [R]
app.get("/schools/:id", (req, res) => {
    School.findById(req.params.id, (err, foundSchool) => {
        console.log(err)
        console.log("Found: ", foundSchool);
        res.render("Show_school", {
            school: foundSchool,
        });
    });
});


// ------- TODO ROUTES ------------//

// --------->Index TODO [Dashboard/ShowAll]
app.get("/todos", (req, res) => {
    Todo.find({}, (err, alltodos) => {
        console.log(err);

        res.render("Index_todo", {
            todos: alltodos,
        });
    });
});
// --------->New todos  [C]
app.get("/todos/new_todo", (req, res) => {
    res.render("New_Todo", {});
});
// --------> POST todos
app.post("/todos", (req, res) => {
    req.body.tuition = +req.body.tuition
    Todo.create(req.body, (err, createdTodo) => {
        console.log(err);
        console.log("Just Added : ", createdTodo);
    });
    res.redirect("/todos");
});
// -------> Edit Todo
app.get("/todos/:id/edit", (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        //findLog
        console.log(err)
        if (!err) {
            res.render("edit_Todo", {
                todo: foundTodo,
                //pass in the foundtodo so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
// --------->PUT/PATCH Todo [U]
app.put("/todos/:id", (req, res) => {

    Todo.findByIdAndUpdate(req.params.id, req.body, (err, updatedTodo) => {
        console.log(err)
        console.log(updatedTodo);
        res.redirect(`/todos/${req.params.id}`);
    });
});
// ------>DELETE Todo  [D]
app.delete("/todos/:id", (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/todos");
    });
});
// --------> todos SEED*
app.get("/todos/seed", (req, res) => {
    console.log(Todo);
    Todo.create(
        [{
                task: "make your bed",
                todo: "tuck in all corners, fluff pillows",
                // comments: [{ body: "finish before", date: "12:00" }],
                // date: { type: Date, default: Date.now },
                // complete: true,

            },
            {
                task: "go to work",
                todo: "leave home get on the train",
                // comments: [{ body: "finish after", date: "12:00" }],
                // date: { type: Date, default: Date.now },
                // complete: false,
            },
            {
                task: "make your bed",
                todo: "tuck in all corners, fluff pillows",
                // comments: [{ body: "finish before", date: "12:00" }],
                // date: { type: Date, default: Date.now },
                // complete: false,
            },
        ],
        (err, data) => {
            res.redirect("/todos");
        }
    );
});
// --------->Show [R]
app.get("/todos/:id", (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        console.log(err)
        console.log("Found: ", foundTodo);
        res.render("Show_todo", {
            todo: foundTodo,


            // you spent an hour looking for that now lowercase TODO on line 351
        });
    });
});



//  ------------ CAREER ROUTES ------------///

app.get("/careers", (req, res) => {
    Career.find({}, (err, allcareers) => {
        console.log(err);

        res.render("Index_career", {
            careers: allcareers,
        });
    });
});
// --------->New careers  [C]
app.get("/careers/new_career", (req, res) => {
    res.render("New_Career", {});
});
// --------> POST careers
app.post("/careers", (req, res) => {
    // req.body.tuition = +req.body.tuition
    Career.create(req.body, (err, createdCareer) => {
        console.log(err);
        console.log("Just Added : ", createdCareer);
    });
    res.redirect("/careers");
});
// -------> Edit Career
app.get("/careers/:id/edit", (req, res) => {
    Career.findById(req.params.id, (err, foundCareer) => {
        //findLog
        console.log(err)
        if (!err) {
            res.render("edit_Career", {
                career: foundCareer,
                //pass in the foundtodo so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
// --------->PUT/PATCH Todo [U]
app.put("/careers/:id", (req, res) => {

    Career.findByIdAndUpdate(req.params.id, req.body, (err, updatedCareer) => {
        console.log(err)
        console.log(updatedCareer);
        res.redirect(`/careers/${req.params.id}`);
    });
});
// ------>DELETE Todo  [D]
app.delete("/careers/:id", (req, res) => {
    Career.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/careers");
    });
});
// --------> careers SEED*
app.get("/careers/seed", (req, res) => {
    console.log(Todo);
    Career.create(
        [{
                career_title: "Software engineer intern",
                company: "google",
                salary: 200000,
                matchmajor: false,

            },
            {
                career_title: "Software engineer intern",
                company: "google",
                salary: 200000,
                matchmajor: false,

            },
            {
                career_title: "Software engineer intern",
                company: "google",
                salary: 200000,
                matchmajor: false,

            },
        ],
        (err, data) => {
            res.redirect("/careers");
        }
    );
});
// --------->Show [R]
app.get("/careers/:id", (req, res) => {
    Career.findById(req.params.id, (err, foundCareer) => {
        console.log(err)
        console.log("Found: ", foundCareer);
        res.render("Show_Career", {
            career: foundCareer,


            // you spent an hour looking for that now lowercase TODO on line 351
        });
    });
});

// --------VACATION ROUTES -------------////

//  make NEW CREATE

// DELETE WORKS
// SHOW WORKS
// EDIT WORKS
// NEW WORKS


app.get("/vacations", (req, res) => {
    Vacation.find({}, (err, allvacations) => {
        console.log(err);

        res.render("Index_vacation", {
            vacations: allvacations,
        });
    });
});
// --------->New vacations  [C]
app.get("/vacations/new_vacation", (req, res) => {
    res.render("New_vacation", {});
});
// --------> POST vacations
app.post("/vacations", (req, res) => {
    // req.body.tuition = +req.body.tuition
    Vacation.create(req.body, (err, createdVacation) => {
        console.log(err);
        console.log("Just Added : ", createdVacation);
    });
    res.redirect("/vacations");
});
// -------> Edit Vacation
app.get("/vacations/:id/edit", (req, res) => {
    Vacation.findById(req.params.id, (err, foundVacation) => {
        //findLog
        console.log(err)
        if (!err) {
            res.render("edit_Vacation", {
                vacation: foundVacation,
                //pass in the foundVacation so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
// --------->PUT/PATCH Todo [U]
app.put("/vacations/:id", (req, res) => {

    Vacation.findByIdAndUpdate(req.params.id, req.body, (err, updatedVacation) => {
        console.log(err)
        console.log(updatedVacation);
        res.redirect(`/vacations/${req.params.id}`);
    });
});
// ------>DELETE Vacat  [D]
app.delete("/vacations/:id", (req, res) => {
    Vacation.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/vacations");
    });
});
// --------> vacations SEED*
app.get("/vacations/seed", (req, res) => {
    console.log(Vacation);
    Vacation.create(
        [{



                location: "Guam",
                country: "USA",
                duration: 5,
                photo: "https://i.natgeofe.com/k/82dbec7a-1caa-4e62-8e17-27bca5de0705/Reef_Guam_Kids_02-21_16x9.jpg",
                hasbeen: false

            },
            {
                location: "Guam",
                country: "USA",
                duration: 5,
                photo: "https://i.natgeofe.com/k/82dbec7a-1caa-4e62-8e17-27bca5de0705/Reef_Guam_Kids_02-21_16x9.jpg",
                hasbeen: false

            },
            {
                location: "Guam",
                country: "USA",
                duration: 5,
                photo: "https://i.natgeofe.com/k/82dbec7a-1caa-4e62-8e17-27bca5de0705/Reef_Guam_Kids_02-21_16x9.jpg",
                hasbeen: false

            },
        ],
        (err, data) => {
            res.redirect("/vacations");
        }
    );
});
// --------->Show [R]
app.get("/vacations/:id", (req, res) => {
    Vacation.findById(req.params.id, (err, foundVacation) => {
        console.log(err)
        console.log("Found: ", foundVacation);
        res.render("Show_Vacation", {
            vacation: foundVacation,


            // you spent an hour looking for that now lowercase TODO on line 351
        });
    });
});



// home page

app.get("/home", (req, res) => {
    res.render("home", {});
});




app.listen("3000", () => {
    console.log("ServerRunning on 3000....");
});
// ----->Server Now Running