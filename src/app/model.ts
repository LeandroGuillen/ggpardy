export type Question = {
  value: number;
  question: string;
  answer: string;
  isSelected?: boolean;
  isAnswered: boolean;
  time?: number;
};

export type Category = {
  name: string;
  questions: Question[];
};
