
class ShoppingCart {
  items = []

  getItems() {
    if(this.items.length === 0) {
      return []
    } else {
      return this.items
    }
  }
  
  addItem(itemName, quantity, price) {
    return this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    })
  }

  clear() {
    this.items = []
  }

  total() {
    const cartValue = this.items.reduce(((sum,item) => {
      return item.quantity*item.pricePerUnit + sum
    }),0)
    return cartValue
  }

}

const cart = new ShoppingCart()
cart.addItem("Trash can", 1, 15.5)

module.exports = ShoppingCart