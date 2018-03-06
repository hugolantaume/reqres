var fecha = require('fecha');

module.exports = {
	get: function(req, res, next) {
		return res.status(200).send({
			time: fecha.format(new Date(), 'hh:mm:ss A'),
			date: fecha.format(new Date(), 'MM-DD-YYYY')
		});
	}
}
