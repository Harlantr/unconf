import * as actionTypes from '../../actions/globalMessage/types';

const initialState = {
  messages: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE:
      return {
        ...state,
        messages: [...state.messages, payload]
      };

    case actionTypes.DESTROY:
      return {
        ...state,
        messages: state.messages.filter(msg => msg.id !== payload)
      };

    default:
      return state;
  }
};
