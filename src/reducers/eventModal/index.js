import * as actionTypes from '../../actions//eventModal/types';

const initialState = {
  modalOpen: false,
  event: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.OPEN_EVENT_MODAL:
      return {
        ...state,
        modalOpen: true,
        event: payload
      };

    case actionTypes.CLOSE_EVENT_MODAL:
      return {
        ...state,
        modalOpen: false,
        event: {}
      };

    default:
      return state;
  }
};
