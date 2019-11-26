
/*
function orderProductById(id, products) {
    var index = products.findIndex(function(product, id) {
        return product.id === id;
        product.orders_counter += i; 
        console.log(product);
      });
    }

module.exports = {
    orderProductById
}
*/
module.exports = function (id, products) {
    this.orderProductById = function () { 
        var index = this.products.findIndex(function(product) {
            return product.id === this.id;
            product.orders_counter += i; 
            console.log(product);
          });
    }
}