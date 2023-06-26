const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

console.log(date)

const app = express()

var tasksList = ["task"]

let workList = ["work"]

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.get("/", function (req, res) {

    let today = date.getWeekDay()

    res.render('list', { listTitle: today, newTask: tasksList })
})

app.post("/", function (req, res) {
    let item = req.body.newItem
    if (req.body.button === "Work") {
        workList.push(item)
        res.redirect("/work")
    } else {
        tasksList.push(item)
        res.redirect("/")
    }

})

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work", newTask: workList })
})

app.get("/about", function (req, res) {
    res.render("about")
})

app.listen(3000, function () {
    console.log("Server is running in PORT 3000.")
})

// app.post("/work", function (req, res) {
//     var workItem = req.body.newItem
//     workList.push(workItem)
//     res.redirect("/work")
// })
