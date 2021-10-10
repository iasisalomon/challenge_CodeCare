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
	SELECT_REPEATED(state, data) {
		const itemsCopy = [...state.items];
		
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
