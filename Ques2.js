let score = prompt("Enter the student's score:");
console.log("The grade is: " + getGrade(score));

function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 79) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else {
        return 'F';
    }
}