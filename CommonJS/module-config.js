const UPLOAD_PICTURE_PATH = 'localhost:8081/xxxxx/pics/upload';
const INSTALL_ORDER_LIST = 'localhost:8081/xxxxx/installOrder/list';

//当exports和module.exports指向不同的对象，暴露的对象还是以module.exports指向的为准
exports = {
	UPLOAD_PICTURE_PATH:UPLOAD_PICTURE_PATH
};

module.exports = {
	INSTALL_ORDER_LIST:INSTALL_ORDER_LIST
}