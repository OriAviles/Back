 class ProductManager {
    constructor(){
        this.products = [];
        this.product = Product;
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        if (this.getProducts().find((p) => p.code == product.code)) return console.log('product code exist'); 
        else product.id = this.getProducts().lenght + 1; this.products.push(product)
     }
 }

 class Product extends ProductManager {
    constructor (title,description, price, thumbnail, code, stock) {
    super();
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
   }
}

const newProductManager = new ProductManager()

console.log(newProductManager.getProducts())
