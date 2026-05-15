//USERS REPORT

let totalAdminsUsers = 0;
let totalStudents = 0;

firebase.database().ref("userDetails").once("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val();

        if (data.Role == "Admin"){
            totalAdminsUsers++;
        } else {
            totalStudents++;
        }
    });

    drawbargraph();
});

function drawbargraph(){
    const ctx = document.getElementById("mybargraph").getContext("2d");

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Admins', 'Students'],
            datasets: [{
                label: 'System Users',
                data: [totalAdminsUsers, totalStudents],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}





//COURSES REPORT

let totalActiveCourses = 0;
let totalInactiveCourses = 0;

firebase.database().ref("Courses").once("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val();

        if (data.Status == "active"){
            totalActiveCourses++;
        } else {
            totalInactiveCourses++;
        }
    });

    drawcoursespie();
});

function drawcoursespie(){
    const ctx = document.getElementById("mypiecourses").getContext("2d");

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Active', 'Inactive'],
            datasets: [{
                label: 'Course Status',
                data: [totalActiveCourses, totalInactiveCourses]
            }]
        }
    });
}

//LECTURERS REPORT

let activeAdmins = 0;
let inactiveAdmins = 0;

firebase.database().ref("userDetails").once("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val();

        // only Admins (lecturers)
        if (data.Role == "Admin") {

            if (data.Status == "active") {
                activeAdmins++;
            } 
            else if (data.Status == "inactive") {
                inactiveAdmins++;
            }
        }
    });

    drawdoughnutchart();
});


function drawdoughnutchart(){
    const ctx = document.getElementById("mydoughnutlecturers").getContext("2d");

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active Admins', 'Inactive Admins'],
            datasets: [{
                label: 'Admins Status',
                data: [activeAdmins, inactiveAdmins],
                backgroundColor: ['green', 'red']
            }]
        },
        options: {
            responsive: true
        }
    });
}
 


//STUDENTS REPORT

let activeStudents = 0;
let inactiveStudents = 0;

firebase.database().ref("userDetails").once("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val();

        if (data.Role === "Student") {

            if (data.Status === "active") {
                activeStudents++;
            } else {
                inactiveStudents++;
            }
        }
    });

    drawBubbleChart();
});


function drawBubbleChart() {

    const ctx = document.getElementById("studentBubbleChart").getContext("2d");

    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Students',
                data: [
                    { x: 1, y: activeStudents, r: 10 },
                    { x: 2, y: inactiveStudents, r: 10 }
                ],
                backgroundColor: 'blue'
            }]
        },
        options: {
            responsive: true
        }
    });
}

//report function


function printReport() {
    window.print();
}