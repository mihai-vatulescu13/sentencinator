import { useState } from "react";
import "./PlayMode.css";
import Dropdown from "../dropdown/Dropdown";
import { DropdownOption } from "./play-mode.config";
import { DROPDOWN_OPTIONS } from "./driopdown.data";

export default function PlayMode() {
  const dropdownOptions: DropdownOption[] = DROPDOWN_OPTIONS;
  //set default value as play mode the first option from the list:
  const [selectedMode, setSelectedMode] = useState(dropdownOptions[0]);

  const onSelectPlayMode = (option: DropdownOption) => {
    setSelectedMode(option);
  };

  return (
    <div className="play-mode-container">
      <h1>Select play modes:</h1>
      <Dropdown options={dropdownOptions} sendOptionToParent={onSelectPlayMode}/>
      {/* test selected mode: */}
      <h2>Selected play mode: {selectedMode.label}</h2>
    </div>
  );
}
