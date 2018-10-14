import { testSaga } from 'redux-saga-test-plan';
import { getConfData } from './index';
import * as actions from '../../actions/conf';

const api = {
  getConfData: jest.fn()
};

describe('Conference Sagas', () => {
  describe('getConfData', () => {
    it('completes successfully', () => {
      const data = {
        conf: {}
      };
      testSaga(getConfData, api)
        .next()
        .call(api.getConfData)
        .next(data)
        .put(actions.getConfDataOk(data))
        .next()
        .isDone();
    });

    it('fails gracefully', () => {
      const error = 'Bad things';
      testSaga(getConfData, api)
        .next()
        .call(api.getConfData)
        .throw(new Error(error))
        .put(actions.getConfDataErr(error))
        .next()
        .isDone();
    });
  });
});

