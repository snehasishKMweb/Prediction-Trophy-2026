function loadLeaderboard(data) {

    const players = [...data.players];

    players.sort((a, b) => b.points - a.points);

    const leaderboardBody = document.getElementById("leaderboard-body");

    leaderboardBody.innerHTML = "";

    players.forEach((player, index) => {

        const medal =
            index === 0 ? "🥇" :
            index === 1 ? "🥈" :
            "🥉";

        leaderboardBody.innerHTML += `

            <div class="leaderboard-player ${index === 0 ? "first-place" : ""}">

                <span class="rank">${medal}</span>

                <span class="player-name">

                    ${player.name}

                    <small>${index === 0 ? "Current Leader" : "Chasing Leader"}</small>

                </span>

                <span class="player-points">

                    ${player.points}

                </span>

            </div>

        `;

    });

}