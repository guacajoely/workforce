import { fetchComputers, fetchCustomers, fetchDepartments, fetchEmployeeCustomers, fetchEmployees, fetchLocations } from "./dataAccess.js";
import { createHTML } from "./createHTML.js";

const mainContainer = document.querySelector("#container");

// Fetch all of the database so that it's stored in application state, then regenerate html
const render = () => {
    fetchComputers()
    .then(() => fetchEmployees())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(() => {
        mainContainer.innerHTML = createHTML()
    })
};

render();

// Listen for state changes and invoke render() when it does
mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})