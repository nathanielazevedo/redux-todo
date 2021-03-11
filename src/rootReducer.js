const INITIAL_STATE = [];

function memeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DELETE-TODO":
      let spot = action.id;
      let result = state.slice(0, spot).concat(state.slice(spot + 1));
      return [...result];

    case "ADD-TODO":
      let thing = action.form;

      return [...state, thing];

    default:
      return state;
  }
}

export default memeReducer;

