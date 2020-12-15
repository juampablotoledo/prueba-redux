import items from "../../data/items";
import { type as findSuggestionsType } from "../actions/findSuggestions";

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		case findSuggestionsType: {
			const regex = new RegExp(`^${payload}`, "i");
			return items.filter((n) => regex.test(n.title));
		}
		default:
			return state;
	}
}

export default reducer;
