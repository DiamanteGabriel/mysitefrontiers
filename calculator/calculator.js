
function addvalues() {
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let result = document.getElementById("result");
    let history = document.getElementById("history");

    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) + parseFloat(secondvalue);
    result.innerHTML += `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} + ${secondvalue} = ${addition}`;
}

function subtractvalues() {
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let result = document.getElementById("result");
    let history = document.getElementById("history");

    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) - parseFloat(secondvalue);
    result.innerHTML = `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} - ${secondvalue} = ${addition}`;
}

function multiplyvalues() {
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let result = document.getElementById("result");
    let history = document.getElementById("history");

    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) * parseFloat(secondvalue);
    result.innerHTML = `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} * ${secondvalue} = ${addition}`;
}

function dividevalues() {
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let result = document.getElementById("result");
    let history = document.getElementById("history");

    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) / parseFloat(secondvalue);
    result.innerHTML = `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} / ${secondvalue} = ${addition}`;
}