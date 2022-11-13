import { ProductsService } from "../services/productsService.js"


export async function listProducts (req, res) {
  const response = await ProductsService.getProducts()
  return res.json(response)
}

export async function seachProducts (req, res) {
  console.log("query", req.query)
  const params = req.query
  const product = await ProductsService.findProduct(params.name)
  return res.json({
    product
  })
}