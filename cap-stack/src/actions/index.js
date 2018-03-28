import adapter from '../adapter'

export function fetchExistingCompanies() {
  return dispatch => {
    adapter.getCompanies().then(data=> {
      dispatch({ type: "FETCH_COMPANIES", payload: data });
    });
  };
}

export function setCurrentCompany(company) {
  return { type: "SET_CURRENT_COMPANY", payload: company }
}

export function updateCompanySearch(inputData) {
  return { type: "UPDATE_COMPANY_SEARCH", payload: inputData};
}


export function showNewCompanyForm () {
  return { type: "SHOW_NEW_COMPANY_FORM", };
}

export function saveNewCompany(formData) {
  return dispatch => {
    adapter.addCompany(formData).then(resp => {
      dispatch({ type: 'SAVE_NEW_COMPANY', payload: resp})
    })
  }
}

export function updateNewCompanyForm(formData) {
  return { type: "UPDATE_NEW_COMPANY_FORM", payload: formData };
}
