import { Course } from "./asm-02-course";

export class Student {
  studentID: string;
  name: string;
  courses: Course[] = [];

  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
  }

  addCourse(course: Course): void {
    // เพิ่มการตรวจสอบค่าก่อนเพิ่มคอร์ส
    if (course && course.namecourse && typeof course.grade === 'number' && !isNaN(course.grade)) {
      this.courses.push(course);
    } else {
      console.error("ข้อผิดพลาด: ข้อมูลคอร์สไม่ถูกต้อง");
    }
  }

  // ฟังก์ชันใหม่สำหรับแปลงเกรดตัวเลขเป็นเกรดตัวอักษร
  getLetterGrade(grade: number): string {
    if (grade >= 80) return 'A';
    if (grade >= 75) return 'B+';
    if (grade >= 70) return 'B';
    if (grade >= 65) return 'C+';
    if (grade >= 60) return 'C';
    if (grade >= 55) return 'D+';
    if (grade >= 50) return 'D';
    if (grade >= 45) return 'F';
    return 'F';
  }

  getAverage(): number {
    if (this.courses.length === 0) {
      return 0;
    }
    const totalGrade = this.courses.reduce((sum, course) => sum + course.grade, 0);
    return totalGrade / this.courses.length;
  }

  displayInfo(): void {
    console.log(`\n--- Student Information ---`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Name: ${this.name}`);
    console.log("Courses:");

    if (this.courses.length === 0) {
      console.log("No courses added yet.");
    } else {
      this.courses.forEach(course => {
        const letterGrade = this.getLetterGrade(course.grade);
        console.log(`- ${course.namecourse}: ${course.grade} (${letterGrade})`);
      });
    }

    const averageGrade = this.getAverage();
    const averageLetterGrade = this.getLetterGrade(averageGrade);
    console.log(`Average Grade: ${averageGrade.toFixed(2)} (${averageLetterGrade})`);
  }
}