// ======================================
// Prediction Trophy 2026
// Recent Activity Module
// ======================================

function loadRecentActivity(data) {

    const activityList = document.getElementById("activity-list");

    activityList.innerHTML = "";

    data.recentActivity.forEach(activity => {

        activityList.innerHTML += `

            <div class="activity-item">

                <div class="activity-match">

                    ${activity.match}

                </div>

                <div class="activity-result ${activity.type}">

                    ${activity.result}

                </div>

            </div>

        `;

    });

}