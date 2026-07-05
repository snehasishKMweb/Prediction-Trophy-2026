// ======================================
// Prediction Trophy 2026
// Next Match Module
// ======================================

function loadNextMatch(data) {

    const nextMatch = data.nextMatch;

    document.getElementById("home-team").textContent = nextMatch.home;

    document.getElementById("away-team").textContent = nextMatch.away;

    document.getElementById("prediction-one").textContent = nextMatch.prediction1;

    document.getElementById("prediction-two").textContent = nextMatch.prediction2;

    document.getElementById("kickoff-time").textContent = nextMatch.kickOff;

}