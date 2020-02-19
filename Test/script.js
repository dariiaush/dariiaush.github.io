let sumRange = document.getElementById("sum-range");//range
let sum = document.getElementById("sum");//text

let refillRange = document.getElementById("refill-range");//range
let refillSum = document.getElementById("refill-sum");//text

const btnForm = document.getElementById("btn-form");

function depositAmount() {
    sum.value = sumRange.value;
}

function depositSum() {
    sumRange.value = sum.value;
}

function depositReplenishment() {
    refillSum.value = refillRange.value;
}

function depositRefill() {
    refillRange.value = refillSum.value;
}



