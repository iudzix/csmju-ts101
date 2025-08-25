import { Course } from "./asm-02-course";
import { Student } from "./asm-02-student";

// สร้างข้อมูลนักศึกษา 3 คน
const student1 = new Student("001", "Alice");
const student2 = new Student("002", "Bob");
const student3 = new Student("003", "Charlie");

// กำหนดรายวิชา 4 วิชาให้แต่ละคน
student1.addCourse(new Course("Math", 85));
student1.addCourse(new Course("Physics", 90));
student1.addCourse(new Course("Chemistry", 78));
student1.addCourse(new Course("History", 92));

student2.addCourse(new Course("Math", 70));
student2.addCourse(new Course("Physics", 80));
student2.addCourse(new Course("English", 88));
student2.addCourse(new Course("Art", 95));

student3.addCourse(new Course("Math", 95));
student3.addCourse(new Course("Computer Science", 85));
student3.addCourse(new Course("Literature", 75));
student3.addCourse(new Course("Economics", 88));

// แสดงผลข้อมูลของนักศึกษาทุกคนพร้อมเกรดเฉลี่ย
console.log("--- Initial Student Data ---");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

// เพิ่มรายวิชาและเกรดอีก 1 รายวิชาให้แต่ละคน
student1.addCourse(new Course("Biology", 88));
student2.addCourse(new Course("Music", 90));
student3.addCourse(new Course("Philosophy", 80));

// แสดงผลข้อมูลนักศึกษาทุกคนพร้อมเกรดเฉลี่ยหลังเพิ่มวิชาใหม่
console.log("\n--- Updated Student Data ---");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();