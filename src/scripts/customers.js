import { getCustomers, getEmployeeCustomers, getEmployees } from "./dataAccess.js"


export const createCustomerList = () => {
    const employees = getEmployees()
    const customers = getCustomers()
    const customerRelationships = getEmployeeCustomers()

    return `<h1>Customers</h1>
                ${customers.map(customer => {

                    // Find all the customer relationships
                    const relationships = customerRelationships.filter( (rel) => {
                        return rel.customerId === parseInt(customer.id)
                    })

                    // Find the related customer for each relationship
                    const assignedEmployees = relationships.map(rel => {
                        return employees.find((employee) => {
                            return employee.id === parseInt(rel.employeeId)
                        })
                    })

                    console.log(assignedEmployees)

                    return `<div class="customer">
                                <header class="customer__name" id="${customer.id}">
                                    <h3>${customer.name}</h3>
                                </header>
                                <section class="customer__employees">
                                Has contracted the following employees:
                                <ul>
                                ${assignedEmployees.map(employee => {
                                    return `<li class="completion" id="customer--${employee.id}"/>${employee.firstName} ${employee.lastName}</li>`}).join("")
                                }
                                </ul>
                            </section>
                            </div>`
                    }).join("")
                }`
    }