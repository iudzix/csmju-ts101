interface Employee { id: number; name: string; position: "dev" | "designer" | "manager"
                    ; salary: number; }
const employees: Employee[] = [
    { id: 1, name: "Alice", position: "dev", salary: 50000 },
    { id: 2, name: "Bob", position: "designer", salary: 45000 },
    { id: 3, name: "Charlie", position: "dev", salary: 52000 },
];

//function ค้นหาพนักงานตามชื่อ
function findEmployeeByName(name: string): Employee | undefined {
    return employees.find(emp => emp.name === name);
}

//แสดงพนักงานทั้งหมด
console.log("All Employees:");
for (const emp of employees) {
    console.log(`- ${emp.name} (${emp.position}), Salary: ${emp.salary}`);
}

//ค้นหาพนักงานชื่อ Alice
const emalice = findEmployeeByName("Alice");
if (emalice) {
    console.log(`พบพนักงานชื่อ Alice: ${emalice.name} (${emalice.position})`);
} else {
    console.log("ไม่พบพนักงานชื่อ Alice");
}

//ค้นหาพนักงานชื่อ John
const emJohn = findEmployeeByName("John");
if (emJohn) {
    console.log(`พบพนักงานชื่อ John: ${emJohn.name} (${emJohn.position})`);
} else {
    console.log("ไม่พบพนักงานชื่อ John");
}