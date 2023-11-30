function filter(url) {
	try {
		new URL(url);
		return true;
	} catch(e) {
		return false;
	}
};

module.exports = function (Liquid) {
	this.registerFilter('isValidUrl', filter);
}
module.exports.filter = filter;