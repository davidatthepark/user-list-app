import { Check, Circle, X } from "lucide-react";

export const StatusIcon = ({ status }) => {
  if (status === "active") {
    return <Check size={12} color="green" strokeWidth={4} />;
  } else if (status === "inactive") {
    return <Circle size={12} color="red" fill="red" />;
  } else if (status === "disabled") {
    return <X size={12} color="orange" strokeWidth={4} />;
  } else {
    return null;
  }
};
