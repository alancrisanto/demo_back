import { ProductsService } from "../services/productsService.js"


export async function listProducts (req, res) {
  const response = await ProductsService.getProducts()
  return res.json(response)
}