module.exports = {
	tags: "posts",
	layout: "post.liquid",
	eleventyComputed: {
		metadata: {
			title: function (data) {
				return `view-horse:🐴 → ${this.readableDate(data.created_date)}`;
			},
			titleHtml: function (data) {
				return `<a href="/">view-horse:🐴</a> → ${this.readableDate(data.created_date)}`;
			},
		}
	}
}