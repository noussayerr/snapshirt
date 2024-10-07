import express from "express"
import dotenv from "dotenv"
import { connectdb } from "./connection/connectiondb.js";
import cookieParser from "cookie-parser";
import authroutes from "./routes/auth.routes.js"
import products from "./routes/product.routes.js"
import cart from "./routes/cart.routes.js"
import cors from "cors"
import order from "./routes/order.routes.js";

const app = express()
dotenv.config();
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser()); 
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/authroutes",authroutes)
app.use("/api/products",products)
app.use("/api/cart",cart)
app.use("/api/order", order);
app.listen(  process.env.port,()  =>  {
    connectdb();
    console.log("server is runnig on port", process.env.port);
});


