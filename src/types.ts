export type QuestionState = {
  questions: Question[];
  answers: string[];
};

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type RootState = {
  questionState: QuestionState;
};
