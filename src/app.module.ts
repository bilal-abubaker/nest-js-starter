import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ProductModule, CategoryModule, StudentModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
