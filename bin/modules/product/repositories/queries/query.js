
const ObjectId = require('mongodb').ObjectId;

class Query {

  constructor(db) {
    this.db = db;
  }

  async findOneProduct(parameter) {
    this.db.setCollection('product');
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findById(id) {
    this.db.setCollection('product');
    const parameter = {
      _id: ObjectId(id)
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }

  async findByCategory(category) {
    this.db.setCollection('product');
    const parameter = {
      productCategory: category
    };
    const recordset = await this.db.findMany(parameter);
    return recordset;
  }

}

module.exports = Query;
