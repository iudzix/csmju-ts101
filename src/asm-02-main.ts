import { Course } from "./asm-02-course";
import { Student } from "./asm-02-student";

// สร้างข้อมูลนักศึกษา 3 คน
const student1 = new Student("001", "Nagumo");
const student2 = new Student("002", "Kaoruko");
const student3 = new Student("003", "Tsukasa");

// กำหนดรายวิชา 4 วิชาให้แต่ละคน
student1.addCourse(new Course("Math", 54));
student1.addCourse(new Course("Physics", 38));
student1.addCourse(new Course("Chemistry", 66));
student1.addCourse(new Course("History", 69));

student2.addCourse(new Course("Math", 50));
student2.addCourse(new Course("Physics", 42));
student2.addCourse(new Course("English", 46));
student2.addCourse(new Course("Art", 75));

student3.addCourse(new Course("Math", 84));
student3.addCourse(new Course("Computer Science", 79));
student3.addCourse(new Course("Literature", 66));
student3.addCourse(new Course("Economics", 84));

// แสดงผลข้อมูลของนักศึกษาทุกคนพร้อมเกรดเฉลี่ย
console.log("--- Initial Student Data ---");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

// เพิ่มรายวิชาและเกรดอีก 1 รายวิชาให้แต่ละคน
student1.addCourse(new Course("Biology", 60));
student2.addCourse(new Course("Music", 88));
student3.addCourse(new Course("Philosophy", 54));

// แสดงผลข้อมูลนักศึกษาทุกคนพร้อมเกรดเฉลี่ยหลังเพิ่มวิชาใหม่
console.log("\n--- Updated Student Data ---");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();