function filter(url) {
	let raw = new URL(url);
	let u = raw.toString();
	if(u.startsWith(raw.protocol)) {
		return u.slice(raw.protocol.length + 2);
	}
	return u;
};

module.exports = function (Liquid) {
	this.registerFilter('displayUrl', filter);
}
module.exports.filter = filter;