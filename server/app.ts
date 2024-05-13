require("dotenv").config();
import express from 'express';
const app = express();
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { db_conn } from "./Database/connect";
import router  from "./Routes/router";

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use("/api", router)
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
	legacyHeaders: false
}))

db_conn().then(() => {
  const PORT= process.env.PORT || 80;
  app.listen(PORT, ()=>{
      console.log("Server running on port " + PORT);
  })
}).catch((error) => {
  console.error(`Failed to connect to the database: ${error}`);
});
