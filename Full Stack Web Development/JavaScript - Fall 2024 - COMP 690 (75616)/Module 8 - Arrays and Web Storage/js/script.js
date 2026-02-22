const initialEmployees = [
    { id: 12345678, name: "Frederic Martinez", extension: 1234, email: "a@example.com", department: "Engineering" },
    { id: 87654321, name: "Alice McDonald", extension: 5678, email: "b@example.com", department: "Marketing" },
    { id: 11223344, name: "Alex Johnson", extension: 9101, email: "c@example.edu", department: "Sales" },
    { id: 44332211, name: "Charlie Green", extension: 2345, email: "d@mail.com", department: "QA" },
    { id: 55667788, name: "Dana White", extension: 6789, email: "e@example.com", department: "Administrative" }
];

let employees = JSON.parse(localStorage.getItem('employees')) || [...initialEmployees];

let form = document.getElementById('addForm');
let selectedTable = document.getElementById('employees');
let employeeCount = document.getElementById('empCount');

function displayEmployees() {
    const tbody = selectedTable.querySelector('tbody');
    
    let rowsHTML = '';
    
    employees.forEach(employee => {
        rowsHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.extension}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td><button class="btn btn-danger" onclick="deleteEmployee(${employee.id})">Delete</button></td>
            </tr>
        `;
    });

    tbody.innerHTML = rowsHTML;
    employeeCount.innerHTML = employees.length;
    localStorage.setItem('employees', JSON.stringify(employees));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();  

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    employees.push({ id, name, extension, email, department });

    form.reset();
    document.getElementById('id').focus();

    displayEmployees();
});

function deleteEmployee(id) {
    const index = employees.findIndex(employee => employee.id == (id));
    if (index !== -1) {
        employees.splice(index, 1); 
    }

    displayEmployees();
}

displayEmployees();
