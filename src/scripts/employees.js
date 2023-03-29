import { getComputers, getCustomers, getDepartments, getEmployeeCustomers, getEmployees, getLocations } from "./dataAccess.js"

export const createEmployeeList = () => {
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const customers = getCustomers()
    const customerRelationships = getEmployeeCustomers()

    return `<h1>Employees</h1>
                ${employees.map(employee => {

                    const matchingComputer = computers.find((computer) => {
                        return computer.id === parseInt(employee.computerId)
                      })

                    const matchingdepartment = departments.find((department) => {
                        return department.id === parseInt(employee.departmentId)
                    })

                    const matchingLocation = locations.find((location) => {
                        return location.id === parseInt(employee.locationId)
                    })

                    // Find all the customer relationships
                    const relationships = customerRelationships.filter( (rel) => {
                        return rel.employeeId === parseInt(employee.id)
                    })

                    // Find the related customer for each relationship
                    const assignedCustomers = relationships.map(rel => {
                        return customers.find((customer) => {
                            return customer.id === parseInt(rel.customerId)
                        })
                    })

                    console.log(assignedCustomers)

                    return `<div class="employee">
                                <header class="employee__name" id="${employee.id}">
                                    <h3>${employee.firstName} ${employee.lastName}</h3>
                                </header>
                                <section class="employee__computer">
                                    Currently using a ${matchingComputer.year} ${matchingComputer.model}
                                </section>
                                <section class="employee__department">
                                    Works in the ${matchingdepartment.name} department
                                </section>
                                <section class="employee__location">
                                    Works at the ${matchingLocation.name} office
                                </section>
                                <section class="employee__customers">
                                Has worked for the following customers:
                                <ul>
                                ${assignedCustomers.map(customer => {
                                    return `<li class="completion" id="customer--${customer.id}"/>${customer.name}</li>`}).join("")
                                }
                                </ul>
                            </section>
                            </div>`
                    }).join("")
                }`
    }