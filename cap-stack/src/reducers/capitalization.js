export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES':
      return {
        ...state,
        allCompanies: action.payload
      }
    case 'FETCH_CAPITALIZATION':
      return {
        ...state,
        CompanyCapitalization: action.payload
      }
    default:
     return state;
  }
}
