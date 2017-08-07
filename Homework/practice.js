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
      /* I want to add each students homeworkScores + testScores to get a sum;
      then divide that sum by length of both arrays;
      then take that average value for each student and determine their grade letter;
      */

      for (item in students) {
        for(innerItem in students) {
            console.log(students[item].homeworkScores);

        }

      }
      };

      gradeStudents(students);

})();
