document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');
    const addItemForm = document.getElementById('addItemForm');
    const itemsTable = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];

    openModalBtn.onclick = () => {
        modal.style.display = 'block';
    };

    closeModalBtn.onclick = () => {
        modal.style.display = 'none';
    };

    addItemForm.onsubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const email = document.getElementById('email').value;

        const row = itemsTable.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = number;
        row.insertCell(2).textContent = email;

        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `
            <button class="editBtn">Editar</button>
            <button class="deleteBtn">Apagar</button>
        `;

        row.querySelector('.editBtn').addEventListener('click', () => editRow(row));
        row.querySelector('.deleteBtn').addEventListener('click', () => deleteRow(row));

        modal.style.display = 'none';
        addItemForm.reset();
    };

    function editRow(row) {
        const name = row.cells[0].textContent;
        const number = row.cells[1].textContent;
        const email = row.cells[2].textContent;

        document.getElementById('name').value = name;
        document.getElementById('number').value = number;
        document.getElementById('email').value = email;

        modal.style.display = 'block';

        row.remove();
    }

    function deleteRow(row) {
        if (confirm('Tem certeza de que deseja apagar?')) {
            row.remove();
        }
    }
});
