
const Product = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const product = new Product(db);

const getProductByCategory = async (category) => {
  const getData = async () => {
    const result = await product.getProductByCategory(category);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
  getProductByCategory
};
