import produce from 'immer';

const initialized = {
  mainCards: [],
};

export const LOAD_CARDS_SUCCESS = 'LOAD_CARDS_SUCCESS';

const reducer = (action, state = initialized) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_CARDS_SUCCESS:
        draft.mainCards = draft.mainCards.concat(action.data);
        break;
      default:
        break;
    }
  });

export default reducer;
