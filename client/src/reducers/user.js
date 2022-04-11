import produce from 'immer';

const initialized = {
  me: null,
  // me: { username: 'ys' },
};
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export const ADD_CARD_TO_ME = 'ADD_CARD_TO_ME';

export const SHARE_CARD_TO_ME = 'SHARE_CARD_TO_ME';

export const REMOVE_CARD_OF_ME = 'REMOVE_CARD_OF_ME';

const reducer = (state = initialized, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_CARD_TO_ME:
        draft.me.Cards.unshift(action.data);
        break;
      case REMOVE_CARD_OF_ME:
        draft.me.Cards = draft.me.Effects.filter(
          (effect) => effect.id !== Number(action.data),
        );
        break;
      case LOG_IN_SUCCESS:
        draft.me = action.data;
        break;
      case LOG_OUT_SUCCESS:
        draft.me = null;
        break;
      case SHARE_CARD_TO_ME:
        draft.me.Shares = [action.data, ...draft.me.Shares];
        break;
      default:
        break;
    }
  });

export default reducer;
