const modal = document.getElementById('task-modal');
const closeModalBtn = document.querySelector('.close-btn');
const taskForm = document.getElementById('task-form');
let selectedColumnId = null;
let selectedCardId = null;

document.querySelectorAll('.add-card').forEach(button => {
    button.addEventListener('click', (e) => {
        selectedColumnId = e.target.closest('.kanban-coluna').getAttribute('data-id');
        selectedCardId = null;
        modal.style.display = 'flex';
        taskForm.reset();
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const dueDate = formatDateForDisplay(document.getElementById('due-date').value);
    const description = document.getElementById('description').value;
    const priority = capitalizeFirstLetter(document.getElementById('priority').value);
    const responsible = document.getElementById('responsible').value;

    if (selectedCardId) {
        const card = document.getElementById(selectedCardId);
        card.querySelector('.title').textContent = title;
        card.querySelector('.due-date').textContent = dueDate;
        card.querySelector('.description').textContent = description;
        card.querySelector('.priority').textContent = priority;
        card.querySelector('.priority').className = `priority ${getPriorityClass(priority)}`;
        card.querySelector('.responsible').textContent = responsible;
    } else {
        const card = createCardElement(title, dueDate, description, priority, responsible);
        const column = document.querySelector(`.kanban-coluna[data-id="${selectedColumnId}"] .kanban-cards`);
        column.appendChild(card);
    }

    taskForm.reset();
    modal.style.display = 'none';
    saveCards();
});
//Selo antikibe do Natã
function createCardElement(title, dueDate, description, priority, responsible) {
    const card = document.createElement('div');
    card.classList.add('kanban-card');
    card.draggable = true;
    card.innerHTML = `
        <p><strong>Tarefa:</strong> <span class="title">${title}</span></p>
        <p><strong>Prazo:</strong> <span class="due-date">${dueDate}</span></p>
        <p><strong>Descrição:</strong> <span class="description">${description}</span></p>
        <p><strong>Prioridade:</strong> <span class="priority ${getPriorityClass(priority)}">${priority}</span></p>
        <p><strong>Atribuído a:</strong> <span class="responsible">${responsible}</span></p>
        <div class="card-actions">
            <i class="fa fa-pencil-alt edit-btn" title="Editar"></i>
            <i class="fa fa-trash-alt delete-btn" title="Excluir"></i>
        </div>
    `;
    card.id = `card-${Date.now()}`;

    addDragAndDropEvents(card);
    addCardFunctionality(card);

    return card;
}

function addCardFunctionality(card) {
    card.querySelector('.delete-btn').addEventListener('click', () => {
        card.remove();
        saveCards();
    });

    card.querySelector('.edit-btn').addEventListener('click', () => {
        selectedCardId = card.id;
        const title = card.querySelector('.title').textContent.trim();
        const dueDate = formatDateForInput(card.querySelector('.due-date').textContent.trim());
        const description = card.querySelector('.description').textContent.trim();
        const priority = card.querySelector('.priority').textContent.trim().toLowerCase();
        const responsible = card.querySelector('.responsible').textContent.trim();

        document.getElementById('title').value = title;
        document.getElementById('due-date').value = dueDate;
        document.getElementById('description').value = description;
        document.getElementById('priority').value = priority;
        document.getElementById('responsible').value = responsible;

        selectedColumnId = card.closest('.kanban-coluna').getAttribute('data-id');
        modal.style.display = 'flex';
    });
}

function addDragAndDropEvents(card) {
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('card-id', card.id);
        e.target.style.opacity = '0.4';
    });

    card.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    });
}

document.querySelectorAll('.kanban-coluna').forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('card-id');
        const card = document.getElementById(cardId);

        const targetColumn = column.querySelector('.kanban-cards');
        if (targetColumn) {
            targetColumn.appendChild(card);
            saveCards();
        }
    });
});

function getPriorityClass(priority) {
    if (priority === 'Alta') return 'high-priority';
    if (priority === 'Média') return 'medium-priority';
    return 'low-priority';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatDateForDisplay(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

function formatDateForInput(date) {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
}

function saveCards() {
    const columns = document.querySelectorAll('.kanban-coluna');
    const boardData = [];

    columns.forEach(coluna => {
        const columnData = {
            id: coluna.getAttribute('data-id'),
            cards: []
        };

        const cards = coluna.querySelectorAll('.kanban-card');
        cards.forEach(card => {
            const cardData = {
                id: card.id,
                title: card.querySelector('.title').textContent.trim(),
                dueDate: card.querySelector('.due-date').textContent.trim(),
                description: card.querySelector('.description').textContent.trim(),
                priority: card.querySelector('.priority').textContent.trim(),
                responsible: card.querySelector('.responsible').textContent.trim(),
            };
            columnData.cards.push(cardData);
        });

        boardData.push(columnData);
    });

    localStorage.setItem('kanbanBoard', JSON.stringify(boardData));
}

function loadCards() {
    const savedData = JSON.parse(localStorage.getItem('kanbanBoard'));
    if (!savedData) return;

    savedData.forEach(columnData => {
        const column = document.querySelector(`.kanban-coluna[data-id="${columnData.id}"] .kanban-cards`);
        
        columnData.cards.forEach(cardData => {
            const card = createCardElement(
                cardData.title,
                cardData.dueDate,
                cardData.description,
                capitalizeFirstLetter(cardData.priority),
                cardData.responsible
            );
            card.id = cardData.id;
            column.appendChild(card);
        });
    });
}

document.addEventListener('DOMContentLoaded', loadCards);
