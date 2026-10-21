export interface Session {
  id: string;
  name: string;
  instructor: string;
  participants: number;
  duration: string;
  status: "live" | "upcoming";
}

export interface SessionPanelProps {
  sessions: Session[];
}
