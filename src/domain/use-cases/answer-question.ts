import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
  insctructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(
    public answersRepository: AnswersRepository
  ){}

  async execute({insctructorId, questionId, content}: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: insctructorId,
      questionId
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}