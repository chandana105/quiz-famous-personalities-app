export type Choice = {
  /**
   * Option to show multiple choices for a question
   */
  option: string;
  /**
   * For the right answer, make this true
   */
  isRight: boolean;
};

export type Question = {
  questionNo: number;
  question: string;
  choices: Choice[];
  points: number;
};

export type Quiz = {
  _id : string,
  quizName: string;
  questions: Question[];
};
