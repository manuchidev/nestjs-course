import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = []

    // Buscar en un bd
    // Peticion a otro backend o api
    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
       const taskFound = this.tasks.find(task => task.id === id)

       if (!taskFound) {
        // throw new Error('Task not found');
        return new NotFoundException(`Task with id ${id} not found`)
       }

       return taskFound
    }

    createTask(task: CreateTaskDto) {
        // Al momento de crear un task, va a copiar todos los valores del task y va a asignarle un id, el cual va a ser la longitud del arreglo/array de tasks
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        console.log(task);
        return 'Actualizando tareas'
    }

    deleteTask() {
        return 'Eliminando tarea'
    }

    updateTaskStatus() {
        return 'Actualizando el estado de una tarea'
    }
}