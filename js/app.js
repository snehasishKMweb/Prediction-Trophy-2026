async function loadTournamentData() {

    try {

        const response = await fetch("data/tournament.json");
        const data = await response.json();

loadLeader(data);

loadLeaderboard(data);

loadNextMatch(data);

loadStatistics(data);

loadRecentActivity(data);

loadMatchHistory(data);

loadBiryani(data);

        console.log("Current Leader Card Updated ✅");

    }

    catch (error) {

        console.error(error);

    }

}

loadTournamentData();