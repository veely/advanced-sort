var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  var name1 = a.name;
  var name2 = b.name;
  var age1 = a.age;
  var age2 = b.age;
  if (name1 < name2) {
    return -1;
  }
  else if (name1 > name2) {
    return 1;
  }
  else {
    return age2 - age1;
  }
});

console.log(students);