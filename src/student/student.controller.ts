import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }
  @Get(':id')
  getStudentById(@Param('id') id: number) {
    return this.studentService.getStudentById(Number(id));
  }
  @Post()
  createStudent(@Body() body: { name: string; age: number }) {
    this.studentService.students.push({
      id: this.studentService.students.length + 1,
      ...body,
    });
    return this.studentService.createStudent(body);
  }
  //   @Put(':id')
  //   updateStudent(
  //     @Param('id') id: number,
  //     @Body() body: { name: string; age: number },
  //   ) {
  //     return this.studentService.updateStudent(Number(id), body);
  //   }
  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studentService.deleteStudent(Number(id));
  }
}
