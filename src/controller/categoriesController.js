import { CategoriesService } from "../services/categoriesService.js";


export async function listCategories (req, res) {
  const response = await CategoriesService.getCategories()
  return res.json(response)
}
