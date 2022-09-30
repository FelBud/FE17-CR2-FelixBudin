//string (JSON) into objects
let week = JSON.parse(weekJSON);
console.log(week);

function updateHTML() {
    for (let weekPlanner of week) {
        document.getElementById("demo").innerHTML += `
        <div class="content">
            <p>${weekPlanner.taskName}</p>
            <div><img src="images/${weekPlanner.image}" width="100%"></div>
            <p>${weekPlanner.dscription}</p>            
            <p class="priority-level">Priority-Level: ${weekPlanner.importance}</p>
            <input type="submit" value="importance" class="importance-btn">
        </div>
    `;
    }
}

//increasing the importance till max 5 

function importance(index) {
    if (week[index].importance != 5) {
        week[index].importance++;
        document.getElementsByClassName("priority-level")[index].innerHTML = week[index].importance;
    }
}

//the cards are only showing up after clicking the sort button?!!?

function addEvent() {
    let importance_btns = document.getElementsByClassName("importance-btn");

    for (let i = 0; i < importance_btns.length; i++) {
        importance_btns[i].addEventListener("click", function() {
            importance(i);
        })
    }
}

//sorting the importance depending on importance value, highest first.

document.getElementById("sort").onclick = sortByImportanceValue;

function sortByImportanceValue() {
    week.sort((a, b) => b.importance - a.importance);

    document.getElementById("demo").innerHTML = "";
    updateHTML();
    addEvent();

}

// let importanceColor = document.getElementbyId.('importance').value
// let classname = ""
// if (importanceColor.value < 1) {
//     classname = "bg-success";
// } else if (importanceColor.value < 3) {
//     classname = "bg-warning";
// } else {
//     classname = "bg-danger";
// }




//loop for changing the color is not working. therefore I commented it out