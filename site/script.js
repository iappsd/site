function calculateWeightedScore() {
    var gpa = document.getElementById('gpa').value;
    var aptitude = document.getElementById('aptitude').value;
    var achievement = document.getElementById('achievement').value;

    var weightedScore = (gpa * 0.3) + (aptitude * 0.3) + (achievement * 0.4);
    document.getElementById('result').innerHTML = `النسبة الموزونة هي: ${weightedScore.toFixed(2)}`;
}
