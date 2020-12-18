export function apiReducer(state, action) {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        data: null,
        isLoading: true,
        error: null
      };
    case 'FETCHED_SUCCESS':
      console.log('2', { action })
      return {
        data: action.payload,
        isLoading: false,
        error: null
      };
    case 'FETCHED_FAILED':
      return {
        data: null,
        isLoading: false,
        error: action.payload
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};