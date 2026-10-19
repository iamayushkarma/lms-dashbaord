export type Session = {
  id: string;
  name: string;
  instructor: string;
  participants: number;
  duration?: string;
  status: "live" | "upcoming";
};

export type SessionPanelProps = {
  sessions: Session[];
};
