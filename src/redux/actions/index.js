export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_JOBS = "GET_JOBS";

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
          type: GET_JOBS,
          payload: jobListFromFetch,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
