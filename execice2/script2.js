
const taskForm = document.getElementById('taskForm'); 
const taskInput = document.getElementById('tache'); 
const taskList = document.getElementById('taskList'); 

taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const taskText = taskInput.value.trim(); 
    if (taskText !== '') {
        
        const newTask = document.createElement('li');

        
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Accomplie';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', function() {
            newTask.classList.toggle('completed'); 
        });

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask); 
        });

        
        newTask.appendChild(taskContent);
        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);

        
        taskList.appendChild(newTask);

        
        taskInput.value = '';
    }
});