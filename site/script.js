function calculateGPA() {
    var firstYear = document.getElementById('firstYear').value;
    var secondYear = document.getElementById('secondYear').value;
    var thirdYear = document.getElementById('thirdYear').value;

    var gpa = (firstYear * 0.2) + (secondYear * 0.4) + (thirdYear * 0.4);
    document.getElementById('result').innerHTML = `المعدل التراكمي هو: ${gpa}`;
}
