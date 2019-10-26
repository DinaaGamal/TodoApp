const mongoose = require("mongoose");
const { mongoURI } = require("../config/config.json");

mongoose.set("debug", true);
mongoose.Promise = Promise;

const connectDB = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      keepAlive: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("connected");
    })
    .catch(err => {
      console.error(err);
      connectDB();
    });
};
connectDB();

const todoSchema = new mongoose.Schema({
  id: {
    type: String
  },
  todo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Todos", todoSchema);
