const express = require("express");
const app = express();
const Todos = require("./model/todos");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Methods", "OPTIONS,POST,DELETE,PATCH,GET");
//   if ("OPTIONS" === req.method) {
//     res.status(200);
//   } else {
//     next();
//   }
// });

app.get("/todoApp/todos", async (req, res) => {
  try {
    let todos = await Todos.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

app.post("/todoApp/todo", async (req, res) => {
  try {
    let newTodo = await Todos.create(req.body);
    const { id, todo, date } = newTodo;
    res.status(200).json({ id, todo, date });
  } catch (error) {
    console.error(error);

    res.status(500).json({ msg: "Something went wrong" });
  }
});

app.delete("/todoApp/todo/:id", async (req, res) => {
  try {
    let delTodo = await Todos.findOne({ id: req.params.id });
    await delTodo.remove();
    let todos = await Todos.find();
    return res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
});
app.patch("/todoApp/todo/:id", async (req, res) => {
  try {
    let editTodo = await Todos.findOneAndUpdate(req.params.id, { $set: { todo: req.body.todo } });
    return res.status(200).json(editTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log(`Server started on 5000`);
});
