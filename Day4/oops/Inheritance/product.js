class Products {
  id;
  name = "jeeva";
  img;
  pricing = 90;
  rating;


  getProduct() {
    console.log(this.name)
  }

}

class Clothing extends Products {
  size;
  category;
}

const clothing = new Clothing();
console.log(clothing.pricing)
clothing.getProduct();