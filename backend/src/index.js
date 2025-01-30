const express = require("express");
const app= express();
const dotenv= require("dotenv");
const userRouter= require("./routes/user");
const expenseRouter= require("./routes/expense");


dotenv.config();
const PORT= process.env.PORT || 3000;

const cors= require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/expense", expenseRouter);




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

