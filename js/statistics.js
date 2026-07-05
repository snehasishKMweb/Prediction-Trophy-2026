// ======================================
// Prediction Trophy 2026
// Statistics Module
// ======================================

function loadStatistics(data) {

    const stats = data.statistics;

    document.getElementById("matches-played").textContent =
        stats.matchesPlayed;

    document.getElementById("matches-remaining").textContent =
        stats.remainingMatches;

    document.getElementById("correct-predictions").textContent =
        stats.correctPredictions;

    document.getElementById("exact-scores").textContent =
        stats.exactScores;

}