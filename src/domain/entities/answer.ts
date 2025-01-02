import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface AnswerProps {
  authorId: string;
  questionId: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entity<AnswerProps>{
  get content(){
    return this.props.content;
  }

  set content(content: string){
    this.props.content = content;
  }

  get authorId(){
    return this.props.authorId;
  }

  get questionId(){
    return this.props.questionId;
  }

  get createdAt(){
    return this.props.createdAt;
  }

  get updatedAt(){
    return this.props.updatedAt;
  }

  static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityID) {
    const answer = new Answer({
      ...props,
      createdAt: new Date(),
    }, id);
  
    return answer;
  }
}