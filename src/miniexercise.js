let grades = [100, 75, 68, 95, 43];

for (let i = 0; i < grades.length; i++) {
  let grade = grades[i];
  
  if (grade > 75) {
    console.log(`Your grade of ${grade} is a pass.`);
  } else {
    console.log(`Your grade of ${grade} is a fail.`);
  }
}