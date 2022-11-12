import { prisma } from "../prisma.js"

export class ProductsService {
  static async getProducts (){
    const products = await prisma.product.findMany()
    return {
      content: products
    }
  }


}