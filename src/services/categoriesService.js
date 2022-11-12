import { prisma } from "../prisma.js"

export class CategoriesService {
  static async getCategories (){
    const categories = await prisma.category.findMany()
    return {
      content: categories
    }
  }
}