'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const configDb = db.collection('config');
	const categoryDb = db.collection('categories');
	const config = await configDb.doc('5ec0e62eed31fb004d24bccb').get();
	const categories = await categoryDb.where({
		parent: null
	}).get();
	let ret = config.data[0];
	ret.categories = categories.data;
	return ret;
};
