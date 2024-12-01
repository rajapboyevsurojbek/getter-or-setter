// 1-masala
export class Student {
  constructor(forstname, lastname, call, adress) {
    this.forstname = forstname;
    this.lastname = lastname;
    this.call = call;
    this.adress = adress;
  }

  getFullname() {
    return `${this.forstname} ${this.lastname}`;
  }

  info() {
    return `${this.forstname} ${this.lastname} ${this.call} ${this.adress}`;
  }

  set name(newName) {
    this.forstname = newName;
  }

  get name() {
    return this.name;
  }
}
let user = new Student("John", "Doe", 1990, "New York");
user.name = "Mike";
console.log(user);
console.log(user.getFullname());
console.log(user.info());

// 2-masala

export class Teacher {
  constructor(forstname, lastname, adress, salary) {
    this.forstname = forstname;
    this.lastname = lastname;
    this.adress = adress;
    this.salary = salary;
  }
  getFullname() {
    return `${this.forstname} ${this.lastname}`;
  }
  info() {
    return `${this.forstname} ${this.lastname} ${this.adress} ${this.salary}`;
  }
  set name(newName) {
    this.forstname = newName;
  }
  get name() {
    return this.name;
  }
}

let teacher = new Teacher(
  "Boburjon",
  "Rasulov",
  "Toshkent",
  "najottalimda teacher"
);
teacher.name = "Rasul";
console.log(teacher);
console.log(teacher.getFullname());
console.log(teacher.info());

// 3-masala

export class Group {
  constructor(name, room, level, studentCounts, teacher) {
    this.name = name;
    this.room = room;
    this.level = level;
    this.studentCounts = studentCounts;
    this.teacher = teacher;
  }
  fullInfo() {
    return `${this.name} ${this.room} ${this.level} ${this.studentCounts} ${this.teacher}`;
  }

  set ism(newName) {
    this.name = newName;
  }
  get ism() {
    return this.name;
  }
}

let group = new Group(
  "N83",
  "slack",
  "4-oy",
  "18-oquvchilar",
  "Boburjon Rasulov"
);

group.ism = "N75";
console.log(group);
console.log(group.fullInfo());

//  4-masala

export class Paymet {
  constructor(from, to, amount, status) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.data = new Date();
    this.status = status;
  }
  set statu(newStatus) {
    this.status = newStatus;
  }
  get statu() {
    return this.status;
  }
  getStatus() {
    return `${this.from} ${this.to} ${this.amount} ${this.data} ${this.status}`;
  }
}

let paymet = new Paymet(
  "Rajapboyev Surojbekdan",
  "Boburjon Rasulovga",
  "10$",
  "28.11.2024",
  "tushdi"
);

paymet.statu = "Xatolik yuz berdi";
console.log(paymet);
console.log(paymet.getStatus());
