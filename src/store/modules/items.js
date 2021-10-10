// initial state
const state = () => ({
	items: [],
	itemsWithTwoChars: [],
});

// getters
const getters = {
	getItems: (state) => state.items,
	getItemsWithTwoChars: (state) => state.itemsWithTwoChars,
};

// actions
const actions = {
	addItem({ commit }, data) {
		commit('ADD_ITEM', data);
		commit('SELECT_REPEATED');
	},
};

// mutations
const mutations = {
	ADD_ITEM(state, data) {
		state.items.push(data);
	},
	SELECT_REPEATED(state) {
		const itemsCopy = [...state.items];
		const charCount = [];
		itemsCopy.map((item) => {
			const obj = {};
			for (let i in item) {
				obj[item[i]] = obj[item[i]] || 0;
				obj[item[i]]++;
			}
			charCount.push(obj);
		});
		const hasExactlyTwoChars = charCount.map((letterCount) => {
			const countOnly = Object.values(letterCount);
			console.log('countOnly :>> ', countOnly);
			if (countOnly.includes(2)) {
				return true;
			} else {
				return false;
			}
		});
		const flaggedItems = itemsCopy.map((item, index) => {
			return {
				item: item,
				hasExactlyTwoChars: hasExactlyTwoChars[index],
			};
		});
		const itemsWithTwoChars = flaggedItems.filter((item, index) => {
			return item.hasExactlyTwoChars === true;
		});
		state.itemsWithTwoChars = [...itemsWithTwoChars];
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
