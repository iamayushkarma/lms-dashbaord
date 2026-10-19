import HolidaysComingUp from "./HolidaysComingUp";
import BuildItToKnowIt from "./BuildItToKnowIt";

type HolidayAndLabSectionProps = {
  onOpenLab?: () => void;
};

export default function HolidayAndLabSection({
  onOpenLab,
}: HolidayAndLabSectionProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 relative bottom-3 p-2 sm:px-3">
      <HolidaysComingUp />

      <BuildItToKnowIt onOpenLab={onOpenLab} />
    </div>
  );
}
