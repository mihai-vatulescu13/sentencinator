import { useState } from "react";
import "./PlayMode.css";
import Dropdown from "../dropdown/Dropdown";
import { DropdownOption } from "./play-mode.config";
import { DROPDOWN_OPTIONS } from "./driopdown.data";

export default function PlayMode() {
  const [selectedMode, setSelectedMode] = useState("single");
  const dropdownOptions: DropdownOption[] = DROPDOWN_OPTIONS;

  const onSelectMode = (event: any) => {
    setSelectedMode(event.target.value);
  };

  return (
    <div className="play-mode-container">
      <h1>Select play modes:</h1>
      <Dropdown options={dropdownOptions} />
    </div>
  );
}
