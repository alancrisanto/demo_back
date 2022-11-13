import { Router } from "express";
import { listProducts, seachProducts } from "../controller/productsController.js";

export const productRouter = Router();

productRouter.route("/products").get(listProducts)
productRouter.get("/product-search/", seachProducts)


