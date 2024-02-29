function calculate() {
    var firstYear = parseFloat(document.getElementById('firstYear').value);
    var secondYear = parseFloat(document.getElementById('secondYear').value);
    var thirdYear = parseFloat(document.getElementById('thirdYear').value);
    var aptitudeTest = parseFloat(document.getElementById('aptitudeTest').value);
    var achievementTest = parseFloat(document.getElementById('achievementTest').value);

    // حساب المعدل التراكمي
    var cumulativeGPA = (firstYear * 0.2) + (secondYear * 0.4) + (thirdYear * 0.4);

    // حساب النسبة الموزونة
    var weightedScore = (cumulativeGPA * 0.3) + (aptitudeTest * 0.3) + (achievementTest * 0.4);

    document.getElementById('cumulativeResult').innerHTML = `المعدل التراكمي هو: ${cumulativeGPA.toFixed(2)}`;
    document.getElementById('weightedResult').innerHTML = `النسبة الموزونة هو: ${weightedScore.toFixed(2)}`;
}