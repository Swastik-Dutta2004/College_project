const quiz = [
    {
        q: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        q: "Capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: 0
    }
];

let index = 0;
let score = 0;
let selected = null;

function load() {
    let q = quiz[index];
    document.getElementById("question").innerText = q.q;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
        optionsDiv.innerHTML += `
      <button onclick="select(${i})">${opt}</button><br>
    `;
    });
}

function select(i) {
    selected = i;
}

function next() {
    if (selected === null) {
        alert("Select an option!");
        return;
    }

    if (selected === quiz[index].answer) {
        score++;
    }

    selected = null;
    index++;

    if (index < quiz.length) {
        load();
    } else {
        document.getElementById("question").innerText = "Quiz Finished";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Score: " + score;
    }
}

load();