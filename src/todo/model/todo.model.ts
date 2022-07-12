import { Field, ObjectType } from "@nestjs/graphql";
import { type } from "os";

@ObjectType()
export class TodoModel {
  @Field((type) => String)
  id: string

  @Field((type) => String)
  title: string

  @Field()
  createdAt: Date

    @Field()
  updatedAt: Date

}
