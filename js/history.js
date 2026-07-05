// ======================================
// Prediction Trophy 2026
// Match History Module
// ======================================

function loadMatchHistory(data) {

    const historyContainer = document.getElementById("match-history-list");

    historyContainer.innerHTML = "";

    data.matchHistory.forEach(match => {

        historyContainer.innerHTML += `

        <div class="match-history-card">

            <div class="match-score">

                ${match.homeFlag} ${match.home}

                <strong>${match.score}</strong>

                ${match.awayFlag} ${match.away}

            </div>

            <div class="prediction-result">

                <div class="prediction">

                    <strong>Snehasish</strong>

                    <span>Prediction: ${match.snehasishPrediction}</span>

                    <span class="${match.snehasishPoints > 0 ? "point-win" : "point-loss"}">

                        ${match.snehasishPoints > 0 ? "+" : ""}${match.snehasishPoints} Point

                    </span>

                </div>

                <div class="prediction">

                    <strong>Subhadeep</strong>

                    <span>Prediction: ${match.subhadeepPrediction}</span>

                    <span class="${match.subhadeepPoints > 0 ? "point-win" : "point-loss"}">

                        ${match.subhadeepPoints > 0 ? "+" : ""}${match.subhadeepPoints} Point

                    </span>

                </div>

            </div>

        </div>

        `;

    });

}