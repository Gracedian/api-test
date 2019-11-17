
const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Product {

  constructor(db){
    this.query = new Query(db);
  }

  async getProductByCategory(category) {
    const product = await this.query.findByCategory(category);
    if (product.err) {
      return wrapper.error(new NotFoundError('Can not find product'));
    }
    const { data } = product;
    return wrapper.data(data);
  }

}

module.exports = Product;
