function calculateWeightedScore() {
    var gpa = parseFloat(document.getElementById('gpa').value);
    var aptitude = parseFloat(document.getElementById('aptitude').value);
    var achievement = parseFloat(document.getElementById('achievement').value);

    if(isNaN(gpa) || isNaN(aptitude) || isNaN(achievement)) {
        document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">يرجى إدخال جميع القيم بشكل صحيح.</div>`;
        return;
    }

    var weightedScore = (gpa * 0.3) + (aptitude * 0.3) + (achievement * 0.4);
    document.getElementById('result').innerHTML = `<div class="alert alert-success" role="alert">النسبة الموزونة هي: ${weightedScore.toFixed(2)}</div>`;
}
