type answerType = {
  title: string;
  isCorrect: boolean;
};

export class TestModel {
  title: string;
  difficulty: number;
  answers: answerType[];
  image?: string;
  explanation: string;
  _id: string;

  constructor(
    _id: string,
    title: string,
    difficulty: number,
    answers: answerType[],
    image: string,
    explanation: string
  ) {
    this.title = title;
    this.difficulty = difficulty;
    this.answers = answers;
    this.image = image;
    this.explanation = explanation;
    this._id = _id;
  }
}
