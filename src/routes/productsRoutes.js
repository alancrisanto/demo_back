import { Router } from "express";
import { listProducts } from "../controller/productsController.js";

export const productRouter = Router();

productRouter.route("/products")
.get(listProducts)
