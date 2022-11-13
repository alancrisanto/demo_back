import { prisma } from "../prisma.js"

export class CategoriesService {
  static async getCategories (){
    const categories = await prisma.category.findMany({
      include: {product: true}
    })
    return {
      content: categories
    }
  }
}