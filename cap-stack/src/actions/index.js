import adapter from '../adapter'


export function fetchExistingCompanies() {
  return dispatch => {
    adapter.getCompanies().then(data=> {
      dispatch({ type: "FETCH_COMPANIES", payload: data });
    });
  };
}

export function fetchExistingCapitalization(id) {
  return dispatch => {
    adapter.getCapitalization(id).then(data => {
      dispatch({ type: "FETCH_CAPITALIZATION", payload: data });
    });
  };
}
