// initial state
const state = () => ({
	items: [],
	repeatedLetters: [],
});

// getters
const getters = {
	getItems: (state) => state.items,
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
		let hasDuplicateChars = [];
		let duplicateWords = [];
		itemsCopy.map((item) => {
			const obj = {};
			for (let i in item) {
				obj[item[i]] = obj[item[i]] || 0;
				obj[item[i]]++;
			}
			charCount.push(obj);
		});
		hasDuplicateChars = charCount.map((letterCount) => {
			const countOnly = Object.values(letterCount);
			console.log('countOnly :>> ', countOnly);
			if (countOnly.includes(2)) {
				return true;
			} else {
				return false;
			}
		});
		console.log('hasDuplicateChars :>> ', hasDuplicateChars);
		console.log('itemsCopy :>> ', itemsCopy);
		duplicateWords = itemsCopy.map((el, index) => {
			if (hasDuplicateChars[index]) {
				return el;
			}
			console.log('duplicateWords :>> ', duplicateWords);
		});
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
