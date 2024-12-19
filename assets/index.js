var conditions;
function reset() {
    conditions = [false, false, false];
}
reset();

function confirmCondition(number) {
    if (number >= 1 && number <= 3) {
        conditions[number - 1] = true;
    } else {
        alert("Invalid condition number");
    }
}

function doSomething() {
    let display;

    if(conditions[0] && conditions[1] && conditions[2]) {
        display = "<h1>All conditions are met!</h1>";
    } else if (conditions[0] && conditions[1]) {
        display = "<h2>Waiting for condition 3...</h2>";
    } else if (conditions[0]) {
        display = "<h2>Waiting for condition 2...</h2>";
    } else {
        display = "<h2>Waiting for condition 1...</h2>";
    }

    document.getElementById("output").innerHTML = display;
}