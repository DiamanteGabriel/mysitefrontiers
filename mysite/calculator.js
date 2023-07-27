let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let result = document.getElementById("result");
let history = document.getElementById("history");

function addvalues() {
    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) + parseFloat(secondvalue);
    result.innerHTML = `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} + ${secondvalue} = ${addition}`;
}

function subtractvalues() {
    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) - parseFloat(secondvalue);
    result.innerHTML = `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} - ${secondvalue} = ${addition}`;
}

function multiplyvalues() {
    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) * parseFloat(secondvalue);
    result.innerHTML = `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} * ${secondvalue} = ${addition}`;
}

function dividevalues() {
    let firstvalue = value1.value;
    let secondvalue = value2.value;
    let addition = parseFloat(firstvalue) / parseFloat(secondvalue);
    result.innerHTML = `<br/> ${addition}`;
    history.innerHTML += `<br/> ${firstvalue} / ${secondvalue} = ${addition}`;
}

function reset() {
    history.innerHTML = ``;
}