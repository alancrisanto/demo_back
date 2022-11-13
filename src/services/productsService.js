import { prisma } from "../prisma.js"

export class ProductsService {
  static async getProducts (){
    const products = await prisma.product.findMany({
      include: {category_categoryToproduct:true}
    })
    return {
      content: products
    }
  }

  static async findProduct (name){
    const product = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      include: {category_categoryToproduct: true},
      rejectOnNotFound: false,
    }) 
    if(product === null || product === undefined || product ===  ""){
      return {
        message: `No existe el producto con el nombre ${name}`
      }
    }
    return {
      content: product
    }
  }
}
