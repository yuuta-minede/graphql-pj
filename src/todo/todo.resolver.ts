import { Query, Resolver } from '@nestjs/graphql';
import {TodoModel} from './model/todo.model'

@Resolver((of) => TodoModel) // return TodoModel schema
export class TodoResolver { // get data in TodoModel
  constructor() { }

  @Query(() => [TodoModel], {name: 'todoPost'}) // mustn't be same query name
  todoPost() { // must be same method name
    return [
      {
        id: '1',
        title: 'titile1',
      },
      {
        id: '2',
        title: 'titile2',
      },
    ]
  }
}
