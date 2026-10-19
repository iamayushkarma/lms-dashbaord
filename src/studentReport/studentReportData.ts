export type QuizStatus = "Submitted" | "Not submitted" | "Not started";

export interface QuizAttempt {
  id: number;
  title: string;
  score: number | null;
  timeTaken: string;
  submittedAt: string;
  status: QuizStatus;
}

export interface TopicPerformanceItem {
  id: number;
  name: string;
  accuracy: number;
}

export const quizAttempts: QuizAttempt[] = [
  {
    id: 1,
    title: "Picture Quiz: Read the Symbol",
    score: 92,
    timeTaken: "2 min 14 sec",
    submittedAt: "16 Oct 2026, 10:24 AM",
    status: "Submitted",
  },
  {
    id: 2,
    title: "Spot the Component",
    score: 76,
    timeTaken: "3 min 02 sec",
    submittedAt: "15 Oct 2026, 04:10 PM",
    status: "Submitted",
  },
  {
    id: 3,
    title: "Identify the Tool",
    score: 54,
    timeTaken: "4 min 11 sec",
    submittedAt: "12 Oct 2026, 01:25 PM",
    status: "Submitted",
  },
  {
    id: 4,
    title: "Basic Concepts",
    score: null,
    timeTaken: "—",
    submittedAt: "—",
    status: "Not submitted",
  },
  {
    id: 5,
    title: "Safety Rules",
    score: null,
    timeTaken: "—",
    submittedAt: "—",
    status: "Not started",
  },
];

export const topicPerformance: TopicPerformanceItem[] = [
  { id: 1, name: "Robotics & Electronics", accuracy: 80 },
  { id: 2, name: "Scientific Tools", accuracy: 60 },
  { id: 3, name: "Robotics Theory Foundations", accuracy: 40 },
  { id: 4, name: "Mechatronics", accuracy: 85 },
];
