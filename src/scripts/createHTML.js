import { createCustomerList } from "./customers.js"
import { createEmployeeList } from "./employees.js"

export const createHTML = () => {
    return `
    
    ${createEmployeeList()}
    ${createCustomerList()}
    
    `
  
  }
  