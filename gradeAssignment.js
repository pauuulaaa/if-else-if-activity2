function grade() {
    let grade = prompt("Enter your grade.");
        if (grade >= 90) {
            alert("Execellent");
        } else if (grade >= 80 && grade <= 89) {
            alert("Good");
        } else if (grade >= 70 && grade <= 79) {
            alert("Fair")
        } else {
            alert("Needs Improvement");
        }
}