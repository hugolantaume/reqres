var data = require("./../data.json"),
	config = require("./../config.json"),
	_ = require("lodash");

module.exports = {

	get: function(req, res, next) {
		var resource = req.params.resource,
			itemArg = req.params[0] || null,
			items;

		if (data[resource] && !itemArg) {
			return returnAll(data[resource], req, res);
		} else if (data[resource] && itemArg) {
			items = data[resource];
			return returnSingle(items, itemArg, res);
		} else if (!data[resource] && !itemArg) {
			return returnAll(data.unknown, req, res);
		} else if (!data[resource] && itemArg) {
			items = data.unknown;
			return returnSingle(items, itemArg, res);
		}
	}

};

function returnAll(items, req, res) {
	var page = req.query.page || 1,
		offset = (page - 1) * config.pagination.page_size,
		paginatedItems = _.rest(items, offset).slice(0, config.pagination.page_size);
	return res.status(200).send({
		page: page,
		per_page: config.pagination.page_size,
		total: items.length,
		total_pages: Math.ceil(items.length / config.pagination.page_size),
		data: paginatedItems
	});
}

function returnSingle(items, itemArg, res) {
	var singleItem = items.filter(function(item) {
		return item.id == itemArg;
	});
	if (singleItem.length) {
		return res.status(200).send({
			data: singleItem[0]
		});
	}
	return res.status(404).send({});
}