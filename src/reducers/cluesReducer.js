export default function cluesReducer(state = [], action) {
  switch (action.type) {
    case 'GET_CLUES':
      return [...state, action.clues];
    default:
      return state;
  }
}
