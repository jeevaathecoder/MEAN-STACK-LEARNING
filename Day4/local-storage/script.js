const products = {
  id: 3,
  "name": "Shirt",
  color: [
    {
      "red": "dark"
    }
  ]
}
localStorage.setItem('products', JSON.stringify(products))

const stroedData = JSON.parse(localStorage.getItem('products'));
console.log(stroedData)


