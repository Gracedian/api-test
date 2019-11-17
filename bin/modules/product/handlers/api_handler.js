const wrapper = require('../../../helpers/utils/wrapper');
const queryHandler = require('../repositories/queries/query_handler');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');

const getProductByCategory = async (req, res) => {
  console.log(req.body);
  
  const { productCategory } = req.query;
  const getData = async () => queryHandler.getProductByCategory(productCategory);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get Category', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Get Category', http.OK);
  };
  sendResponse(await getData());
};

module.exports = {
  getProductByCategory
};
