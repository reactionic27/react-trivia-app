export type SelectType = {
  value: string;
  label: string;
  key: string;
};

export type ModalType = {
  visible: boolean;
  setVisible: (args: boolean) => void;
};

export type ListType = {
  activities: ActivityType[];
};

export type ActivityType = {
  type: string;
  url?: string;
  note: string;
};

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

export type PayloadType = {
  type: string;
  payload: {
    answer: string;
  };
};
