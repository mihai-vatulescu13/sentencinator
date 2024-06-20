import { useState } from "react";
import "./Dropdown.css";
import { DropdownOption } from "../play-mode/play-mode.config";

export default function Dropdown(props: any) {
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownOptions = props.options.map(
    (option: DropdownOption, index: number) => {
      return (
        <li
          onClick={(e: any) => onSelectOption(e, option)}
          key={index}
          className={"item" + (option.id === index + 1 ? "selected-option" : "")}
          value={option.value}
        >
          {option.label}
        </li>
      );
    }
  );
  const [selectedOption, setSelectedOption] = useState({});

  const onSelectOption = (e: any, option: DropdownOption) => {
    e.stopPropagation();
    setSelectedOption(option);
  };

  const onOpenCloseMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <ul onClick={onOpenCloseMenu} className="dropdown">
      <h3>Select play option &#x1F447;</h3>
      {openMenu && <div className="dropdown-options">{dropdownOptions}</div>}
    </ul>
  );
}
