const headers = () => {
  return {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
 }
}

const URL_ROOT = 'http://localhost:3001'
const API_ROOT = `${URL_ROOT}/api/v1`

const getCompanies = () => {
  return fetch(`${API_ROOT}/companies`, {
    headers: headers()
  }).then(res => res.json())
}

const getCapitalization = (company_id) => {
  return fetch(`${API_ROOT}/companies/${company_id}`, {
    headers: headers()
  }).then(res => res.json())
}

const addCompany = (c) => {
  return fetch(`${API_ROOT}/companies`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({company: c})
  }).then(res => res.json())
}

const addCapitalization = (c) => {
  return fetch(`${API_ROOT}/capitalizations`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({capitalization: c})
  }).then(res => res.json())
}


export default {
  getCompanies,
  getCapitalization,
  addCompany,
  addCapitalization
}
