import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service'
import { Task } from './task.entity/task.entity'


@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {

  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll()
  }

  // @Get(':id')
  // get(@Param() params) {
  //   return this.taskService.findOne(params.id);
  // }

  @Post('create-task')
  create(@Body() task: Task) {
    return this.taskService.create(task);
  }

  @Put('update-task')
  update(@Body() task: Task) {
    return this.taskService.update(task);
  }

  @Delete('update-task/:id')
  deleteUser(@Param() params) {
    return this.taskService.delete(params.id);
  }
}

