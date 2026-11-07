const taskForm = document.getElementById("taskForm");

const titleInput = document.getElementById("title");

const descriptionInput = document.getElementById("description");

const statu = document.getElementById('statu');

const submitBtn = document.getElementById("submitBtn");

const tasksContainer = document.getElementById("tasksContainer");


function displayTasks(tasks) {
    tasksContainer.innerHTML = '';
    tasks.forEach(task => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>${task.completed ? "Terminée" : "En cours"}</p>

        `;
        tasksContainer.appendChild(div);
        div.innerHTML += `
            <button>Modifier</button>
            <button>Supprimer</button>
        `;


    });
}

submitBtn.addEventListener('click', (e) =>{
    displayTasks(tasks);

})