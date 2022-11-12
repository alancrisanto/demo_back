import { CategoriesService } from "../services/categoriesService.js";


export async function listCategories (req, res) {
  const response = await CategoriesService.getCategories()
  return res.json(response)
}




// export const getCategories = async (req, res)=> {
//   const categorias = await prisma.category.findMany({})
//   return res.json({
//     content: categorias
//   })
// }

// export const searchCategory = async (req, res)=> {
//   const params = req.query
//   if(params.estado){
//     params.estado = params.estado === "true" ? true : false
//   }
//   const categorias = await prisma.category.findMany({
//     where: params
//   })
//   return res.json({
//     content: categorias,
//   })
// }