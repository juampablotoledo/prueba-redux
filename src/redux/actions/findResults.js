export const type = 'findResults';

const findCurrentItem = (text) => {
return {
	type,
	payload: text,
	}
};

export default findResults;