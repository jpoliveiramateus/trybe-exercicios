export const FETCH_REDDIT = 'FETCH_REDDIT';

const receivedReddit = (data) => ({
  type: FETCH_REDDIT,
  payload: {
    data,
  }
});

export const ERROR_REDDIT = 'ERROR_REDDIT';

const errorReddit = (error) => ({
  type: ERROR_REDDIT,
  payload: {
    error,
  }
});

export const REQUEST_REDDIT = 'REQUEST_REDDIT';

const requestReddit = () => ({ type: REQUEST_REDDIT });

export const fetchReddit = (name) => async (dispatch) => {
  dispatch(requestReddit());
  try {
    const response = await fetch(`https://www.reddit.com/r/${name}.json`);
    const data = await response.json();
    dispatch(receivedReddit(data.data.children));
  } catch (error) {
    dispatch(errorReddit(error));
  }
};
