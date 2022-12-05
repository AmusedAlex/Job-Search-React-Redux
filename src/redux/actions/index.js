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

// export const getJobsAction = ()=>{
//     return async (dispatch, getState) =>{
//         try {
//             const response = await fetch(baseEndpoint + query + "&limit=20");
//             if (response.ok) {
//               const { data } = await response.json();
//               setJobs(data);
//             } else {
//               alert("Error fetching results");
//             }
//           } catch (error) {
//             console.log(error);
//           }
//         };
//     }
