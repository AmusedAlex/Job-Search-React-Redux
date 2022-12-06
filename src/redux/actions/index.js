export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToCartAction = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCarAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  };
};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    let baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        const jobListFromFetch = data.data;
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS,
          payload: jobListFromFetch,
        });
      } else {
        alert("Error fetching results");
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
    }
  };
};
