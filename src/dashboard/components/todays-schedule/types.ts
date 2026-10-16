export type ScheduleIconName = "video" | "chat" | "board" | "clock";

export type DotColor = "violet" | "blue" | "emerald" | "amber";

export type TileColor = "rose" | "violet" | "indigo" | "emerald";

export type ScheduleEvent = {
  id: string;
  time: string; // e.g. "10:00 AM"
  title: string;
  type: string; // e.g. "Live Class"
  duration: string; // e.g. "1h"
  status: "live" | "upcoming"; // live -> "Join", upcoming -> "Start"
  icon: ScheduleIconName;
  tileColor: TileColor;
  dotColor: DotColor;
};
