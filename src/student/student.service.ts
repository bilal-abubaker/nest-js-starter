import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  public students = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 21,
    },
    {
      id: 3,
      name: 'Jim Doe',
      age: 22,
    },
  ];

  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    return this.students.find((ele) => ele.id === id) ?? {};
  }
  createStudent({ name, age }: { name: string; age: number }) {
    this.students.push({
      id: this.students.length + 1,
      name,
      age,
    });
    return this.students;
  }
  //   put

  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((ele) => ele.id === id);
    if (index !== -1) {
      throw new NotFoundException('Student not found');
    }
    this.students[index] = {
      id,
      ...data,
    };
    return this.students;
  }
  deleteStudent(id: number) {
    const student = this.students.findIndex((ele) => ele.id === id);
    if (student !== -1) {
      this.students.splice(student, 1);
    }
    return this.students;
  }
}
