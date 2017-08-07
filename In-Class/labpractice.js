(function () {
    const students = [
        {
            name: 'Jim',
            homeworkScores: [90, 75, 82, 94],
            testScores: [98, 87]
        },
        {
            name: 'Maria',
            homeworkScores: [66, 83, 91, 93],
            testScores: [85, 88]
        },
        {
            name: 'Pam',
            homeworkScores: [92, 87, 85, 91],
            testScores: [89, 78]
        },
        {
            name: 'Fernando',
            homeworkScores: [83, 71, 92, 100],
            testScores: [95, 91]
        }
    ];

    function gradeStudents (students) {
      for (student in students) {
        let totalScore = 0;
        let numberGrade = 0;

      for (grade in students[student].homeworkScores) {
        totalScore += students[student].homeworkScores[grade];
        numberGrade += 1;
      }

      for (grade in students[student].testScores) {
        totalScore += students[student].testScores[grade];
        numberGrade += 1;
      }

      const finalGrade = totalScore / numberGrade;


      if (finalGrade < 60) {
        console.log(students[student].name + ' recieved a letter grade of F')
      } else if (finalGrade >= 60 && finalGrade < 70) {
        console.log(students[student].name + ' recieved a letter grade of D')
      } else if (finalGrade >= 70 && finalGrade < 80) {
        console.log(students[student].name + ' recieved a letter grade of C')
      } else if (finalGrade >= 80 && finalGrade < 90) {
        console.log(students[student].name + ' recieved a letter grade of B')
      } else {
        console.log(students[student].name + ' recieved a letter grade of A')
      }

    }

    };

    gradeStudents(students);
})();
