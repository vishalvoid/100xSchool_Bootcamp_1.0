import express from "express";

const app = express();

app.use("/api", router);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});


export const router:Router = Router();

