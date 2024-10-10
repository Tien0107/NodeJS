import express from "express";
import rootRouter from "./routes/root.mjs";

const port = 3000;
const app = express();

//phuong thuc hien thi server của express
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", rootRouter)
app.use(express.static('public'))



app.listen(port, () => {
  console.log(`Server started  in http://localhost:${port}`);
});