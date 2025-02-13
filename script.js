// Sample data for rooms
const roomData = {
    'C110': {
        capacity: 72,
        schedule: {
            'Monday': {
                'Period 1': 'occupied',
                'Period 2': 'occupied',
                'Period 3': 'occupied',
                'Period 4': 'occupied',
                'Period 5': 'occupied',
                'Period 6': 'occupied',
                'Period 7': 'occupied',
                'Period 8': 'occupied',
                'Period 9': 'occupied',
                'Period 10': 'occupied',
                'Period 11': 'occupied'
            },
            'Tuesday': {
                'Period 1': 'occupied',
                'Period 2': 'occupied',
                'Period 3': 'occupied',
                'Period 4': 'occupied',
                'Period 5': 'occupied',
                'Period 6': 'occupied',
                'Period 7': 'occupied',
                'Period 8': 'occupied',
                'Period 9': 'occupied',
                'Period 10': 'occupied',
                'Period 11': 'occupied'
            },
            'Wednesday': {
                'Period 1': 'occupied',
                'Period 2': 'occupied',
                'Period 3': 'occupied',
                'Period 4': 'occupied',
                'Period 5': 'occupied',
                'Period 6': 'occupied',
                'Period 7': 'occupied',
                'Period 8': 'occupied',
                'Period 9': 'occupied',
                'Period 10': 'free',
                'Period 11': 'free'
            },
            'Thursday': {
                'Period 1': 'occupied',
                'Period 2': 'occupied',
                'Period 3': 'occupied',
                'Period 4': 'occupied',
                'Period 5': 'occupied',
                'Period 6': 'occupied',
                'Period 7': 'occupied',
                'Period 8': 'occupied',
                'Period 9': 'occupied',
                'Period 10': 'occupied',
                'Period 11': 'occupied'
            },
            'Friday': {
                'Period 1': 'occupied',
                'Period 2': 'occupied',
                'Period 3': 'occupied',
                'Period 4': 'occupied',
                'Period 5': 'occupied',
                'Period 6': 'occupied',
                'Period 7': 'occupied',
                'Period 8': 'free',
                'Period 9': 'occupied',
                'Period 10': 'occupied',
                'Period 11': 'occupied'
            },
            'Saturday': {
                'Period 1': 'free',
                'Period 2': 'free',
                'Period 3': 'occupied',
                'Period 4': 'occupied',
                'Period 5': 'occupied',
                'Period 6': 'occupied',
                'Period 7': 'free',
                'Period 8': 'occupied',
                'Period 9': 'occupied',
                'Period 10': 'free',
                'Period 11': 'occupied'
            }
        }
    },
    'C007': {
        capacity: 60,
        schedule: {
            'Monday': {
                'Period 1': 'free',
                'Period 2': 'free',
                'Period 3': 'free',
                'Period 4': 'free',
                'Period 5': 'free',
                'Period 6': 'free',
                'Period 7': 'free',
                'Period 8': 'free',
                'Period 9': 'free',
                'Period 10': 'free',
                'Period 11': 'free'
            },
            'Tuesday': {
                'Period 1': 'free',
                'Period 2': 'free',
                'Period 3': 'free',
                'Period 4': 'free',
                'Period 5': 'free',
                'Period 6': 'free',
                'Period 7': 'free',
                'Period 8': 'free',
                'Period 9': 'free',
                'Period 10': 'free',
                'Period 11': 'free'
            },
            'Wednesday': {
                'Period 1': 'free',
                'Period 2': 'free',
                'Period 3': 'occupied',
                'Period 4': 'occupied',
                'Period 5': 'free',
                'Period 6': 'free',
                'Period 7': 'free',
                'Period 8': 'free',
                'Period 9': 'free',
                'Period 10': 'free',
                'Period 11': 'free'
            },
            'Thursday': {
                'Period 1': 'free',
                'Period 2': 'free',
                'Period 3': 'free',
                'Period 4': 'free',
                'Period 5': 'free',
                'Period 6': 'free',
                'Period 7': 'free',
                'Period 8': 'free',
                'Period 9': 'free',
                'Period 10': 'free',
                'Period 11': 'free'
            },
            'Friday': {
                'Period 1': 'free',
                'Period 2': 'free',
                'Period 3': 'free',
                'Period 4': 'free',
                'Period 5': 'free',
                'Period 6': 'free',
                'Period 7': 'free',
                'Period 8': 'free',
                'Period 9': 'free',
                'Period 10': 'free',
                'Period 11': 'free'
            },
            'Saturday': {
                'Period 1': 'free',
                'Period 2': 'free',
                'Period 3': 'free',
                'Period 4': 'free',
                'Period 5': 'free',
                'Period 6': 'free',
                'Period 7': 'free',
                'Period 8': 'free',
                'Period 9': 'free',
                'Period 10': 'free',
                'Period 11': 'free'
            }
        }
    }
};

function searchRoom() {
    const roomNumber = document.getElementById('roomInput').value.toUpperCase();
    const resultSection = document.getElementById('resultSection');

    if (roomData[roomNumber]) {
        const room = roomData[roomNumber];
        let html = `
            <h2>Room ${roomNumber}</h2>
            <p class="capacity">Capacity: ${room.capacity} students</p>
            <h3>Schedule</h3>
            <table class="timetable">
                <tr>
                    <th>Period</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
        `;

        const periods = Object.keys(room.schedule['Monday']);
        periods.forEach(period => {
            html += `
                <tr>
                    <td>${period}</td>
                    <td class="${room.schedule['Monday'][period]}">${room.schedule['Monday'][period]}</td>
                    <td class="${room.schedule['Tuesday'][period]}">${room.schedule['Tuesday'][period]}</td>
                    <td class="${room.schedule['Wednesday'][period]}">${room.schedule['Wednesday'][period]}</td>
                    <td class="${room.schedule['Thursday'][period]}">${room.schedule['Thursday'][period]}</td>
                    <td class="${room.schedule['Friday'][period]}">${room.schedule['Friday'][period]}</td>
                    <td class="${room.schedule['Saturday'][period]}">${room.schedule['Saturday'][period]}</td>
                </tr>
            `;
        });

        html += '</table>';
        resultSection.innerHTML = html;
    } else {
        resultSection.innerHTML = '<p>Room not found. Please try again.</p>';
    }
}

function getPeriodStatus(daySchedule, range) {
    for (let slot in daySchedule) {
        if (slot === range) {
            return daySchedule[slot];
        }
    }
    return 'free'; // Default to free if not explicitly marked as occupied
} 