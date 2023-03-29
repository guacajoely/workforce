const API = "http://localhost:8088"
const applicationState = {}

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.computers = responseArray })
}

export const getComputers = () => {
    return applicationState.computers.map(obj => ({ ...obj }))
}

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.employees = responseArray })
}

export const getEmployees = () => {
    return applicationState.employees.map(obj => ({ ...obj }))
}

export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.departments = responseArray })
}

export const getDepartments = () => {
    return applicationState.departments.map(obj => ({ ...obj }))
}

export const fetchLocations = () => {
    return fetch(`${API}/locations`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.locations = responseArray })
}

export const getLocations = () => {
    return applicationState.locations.map(obj => ({ ...obj }))
}

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.customers = responseArray })
}

export const getCustomers = () => {
    return applicationState.customers.map(obj => ({ ...obj }))
}

export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.employeeCustomers = responseArray })
}

export const getEmployeeCustomers = () => {
    return applicationState.employeeCustomers.map(obj => ({ ...obj }))
}