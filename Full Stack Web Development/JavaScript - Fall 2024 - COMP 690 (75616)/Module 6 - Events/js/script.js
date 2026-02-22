window.addEventListener('load', () => {
    const processForm = (message, id) => {
        console.log(message + document.getElementById(id).value);
    }

    document.getElementById('empForm').addEventListener('submit', (e) => {
        e.preventDefault();
        processForm("ID: ", 'id')
        processForm("Name: ", 'name')
        processForm("Extension: ", 'ext')
        processForm("Email: ", 'email')
        processForm("Department: ", 'department')
    });
});
