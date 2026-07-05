function loadLeader(data) {

    const players = [...data.players];

    players.sort((a, b) => b.points - a.points);

    const leader = players[0];
    const second = players[1];

    document.getElementById("leader-name").textContent =
        leader.name;

    document.getElementById("leader-points").textContent =
        leader.points;

    document.getElementById("leader-gap").textContent =
        `+${leader.points - second.points} points ahead of ${second.name}`;

    document.getElementById("last-update").textContent =
        data.tournament.lastUpdated;

}