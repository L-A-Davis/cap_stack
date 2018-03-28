export default (state = {
  allCompanies: [],
  currentCompany: [],
  NewCompanyForm: {
    Company_ticker: '',
    Company_name: '',
  },
  showForms: {
    showNewCompanyForm: false
  }

}, action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES':
      return {
        ...state,
        allCompanies: action.payload
      }

    case 'SET_CURRENT_COMPANY':
      return {
        ...state,
        currentCompany: action.payload
      }

    case 'UPDATE_COMPANY_SEARCH':
    return {
      ...state, ...action.payload
    }

    case 'SHOW_NEW_COMPANY_FORM':
      return {
        ...state,
          showForms: {...state.showForms, showNewCompanyForm: true
          }
      }

    case "UPDATE_NEW_COMPANY_FORM":
        return {
          ...state,
          NewCompanyForm: {...state.NewCompanyForm, ...action.payload}
        }

    case "SAVE_NEW_COMPANY":
      return {
        ...state,
        currentCompany: {...state.currentCompany, ...action.payload
        },
        NewCompanyForm: {}
      }

    default:
     return state;
  }
}
