// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let selectedTable = document.getElementById('employees')
let employeeCount = document.getElementById('empCount');
let count = 0;
employeeCount.appendChild(document.createTextNode(count));

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = document.getElementById('id').value;
    let fullName = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(employeeID));
    cellName.appendChild(document.createTextNode(fullName));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('X'));
    deleteButton.classList.add('btn', 'btn-danger');
    cellDelete.appendChild(deleteButton);

    // DELETE EMPLOYEE
    deleteButton.addEventListener('click', (e) => {
        if (confirm('Employee delendus est? (Confirm)')) {

        //Reasoning: e (button) << td << tr, therefore use parentElement twice to access it. 
        selectedTable.deleteRow(e.target.parentElement.parentElement.rowIndex);  

        count--;
        employeeCount.textContent = count;
        };
    });
    
    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    employeeCount.textContent = count; 
})
