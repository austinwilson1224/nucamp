class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email =  email;
        this.community = community;
    }
}

const austin = new Student("Austin","e@mail.com","react?");
const austin2 = new Student("Austin2", "e@mail.com","reac");
const joe = new Student("Joe", "other@email.com","reac");


class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {

        const test = this.students.filter(test_student => test_student.email === student.email);

        if(!test.length) {
            this.students.push(student);
            // console.log(student);
            console.log(`Registration succeeded for ${student.name} with email ${student.email}\n\n`);
        }
        else console.log(`The student ${student.email} is already registered in this course\n\n`);
    }
}

const react = new Bootcamp("React","intermediate");



react.registerStudent(austin);
react.registerStudent(austin);
react.registerStudent(austin2);
react.registerStudent(joe);
console.log(react)