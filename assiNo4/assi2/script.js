let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function show() {
    let list = document.getElementById("list")
    list.innerHTML = ""

    tasks.forEach((t, i) => {
        list.innerHTML +=
        `<li>
        <input type ="checkbox">
            ${t}
            <button onClick="deleteTask(${i})">X</button>
        </li>`
    });
}

function addTask() {
    let task = document.getElementById("task").value;
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    show()
}

function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    show()
}

show();