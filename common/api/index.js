export const get_index = () => {
	return uniCloud.callFunction({
		name: 'get_index',
	})
}