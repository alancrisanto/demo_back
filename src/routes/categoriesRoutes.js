import { Router } from "express";
import { listCategories } from "../controller/categoriesController.js";

// import { getCategories, searchCategory } from "../controller/categoriesController";


export const categoryRouter = Router();

categoryRouter.route("/category")
.get(listCategories)




// categoriaRouter.route("/categoria").get(getCategories)

// categoriaRouter.get("/search-category", searchCategory)