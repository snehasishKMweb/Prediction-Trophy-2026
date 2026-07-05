// ======================================
// Prediction Trophy 2026
// Biryani Challenge Module
// ======================================

function loadBiryani(data) {

    const players = [...data.players];

    players.sort((a, b) => b.points - a.points);

    const leader = players[0];
    const loser = players[1];

    document.getElementById("biryani-leader").textContent =
        leader.name;

    document.getElementById("biryani-status").textContent =
        `${loser.name} owes 23 Chicken Biryani 🍛`;

}