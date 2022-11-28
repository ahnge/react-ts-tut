import "./select.css";
import { useState, useEffect, useRef } from "react";

export type SelectOptions = {
  label: string;
  value: number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOptions[];
  onChange: (value: SelectOptions[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

type SelectProps = {
  options: SelectOptions[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({ value, onChange, options, multiple }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [highLightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };

  const selectOption = (option: SelectOptions) => {
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value.filter((v) => v !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      onChange(option);
    }
  };

  const isSelected = (op: SelectOptions) => {
    if (multiple) {
      return value.includes(op);
    }
    return op === value;
  };

  useEffect(() => {
    if (open) setHighlightedIndex(0);
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setOpen((prev) => !prev);
          if (open) selectOption(options[highLightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!open) {
            setOpen(true);
            break;
          }

          const newValue = highLightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [open, highLightedIndex, options]);

  return (
    <div
      className="container"
      onClick={() => setOpen((p) => !p)}
      tabIndex={0}
      onBlur={() => setOpen(false)}
      ref={containerRef}
    >
      <span className="value">
        {multiple
          ? value?.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className="option-badge"
              >
                {v.label}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        className="clear-btn"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={`options ${open ? "show" : ""}`}>
        {options.map((op, index) => (
          <li
            key={op.value}
            className={`option ${isSelected(op) ? "selected" : ""} 
            ${highLightedIndex === index ? "highlighted" : ""}
            `}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(op);
              setOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            {op.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
