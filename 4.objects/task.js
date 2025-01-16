function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Ivan", "male", 20);
let student2 = new Student("Eva", "female", 19);
let student3 = new Student("Egor", "male", 21);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.hasOwnProperty("marks")) {
        return null;
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty("marks") || this.marks.length === 0) {
        return 0;
    }
    return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
