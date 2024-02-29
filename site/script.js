document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', calculateGPA);
});

function calculateGPA() {
    var firstYear = parseFloat(document.getElementById('firstYear').value);
    var secondYear = parseFloat(document.getElementById('secondYear').value);
    var thirdYear = parseFloat(document.getElementById('thirdYear').value);

    var gpa = (firstYear * 0.2) + (secondYear * 0.4) + (thirdYear * 0.4);
    document.getElementById('result').innerHTML = `المعدل التراكمي هو: ${gpa.toFixed(2)}`;
}
