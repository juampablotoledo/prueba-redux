export const type = 'findSuggestions';

const findCurrentItem = (text) => {
return {
	type,
	payload: text,
	}
};

export default findSuggestions;