import { initialDataError, initialDataLoading } from './index';

describe('Conf/Event Selectors', () => {
  describe('initialDataLoading', () => {
    test('should return initialDataLoading = true if both states are loading', () => {
      const state = {
        events: {
          eventsLoading: true
        },
        conf: {
          confDataLoading: true
        }
      };

      expect(initialDataLoading(state)).toEqual(true);
    });

    test('should return initialDataLoading = true if either states are loading', () => {
      const state = {
        events: {
          eventsLoading: false
        },
        conf: {
          confDataLoading: true
        }
      };

      expect(initialDataLoading(state)).toEqual(true);
    });

    test('should return initialDataLoading = false if neither states are loading', () => {
      const state = {
        events: {
          eventsLoading: false
        },
        conf: {
          confDataLoading: false
        }
      };

      expect(initialDataLoading(state)).toEqual(false);
    });
  });

  describe('initialDataError', () => {
    test('should return initialDataError for events', () => {
      const state = {
        events: {
          eventsError: new Error('bad event')
        },
        conf: {
          confDataError: null
        }
      };

      expect(initialDataError(state)).toEqual(Error('bad event'));
    });

    test('should return initialDataError for conf', () => {
      const state = {
        events: {
          eventsError: null
        },
        conf: {
          confDataError: new Error('bad conf')
        }
      };

      expect(initialDataError(state)).toEqual(Error('bad conf'));
    });

    test('should return null initialDataError', () => {
      const state = {
        events: {
          eventsError: null
        },
        conf: {
          confDataError: null
        }
      };

      expect(initialDataError(state)).toEqual(null);
    });
  });
});
