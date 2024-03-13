import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Chips.css";
import { chipData } from "./Data";

export default function ClickableLinkChips() {
  const [selectChips, setSelectChips] = React.useState(0);

  return (
    <div className="chips">
      <Stack direction="row" spacing={2} style={{ position: "sticky", top: 0,backgroundColor:"white",padding:"15px" }}>
        {chipData.map((chip, index) => (
          <Chip
            className={`chips__label ${selectChips === index ? "selected" : ""}`}
            key={index}
            label={chip.label}
            variant={chip.variant}
            clickable
            onClick={() => setSelectChips(index)}
          />
        ))}
      </Stack>

      {selectChips !== null && (
        <div className="chips__qas">
          <h3>{chipData[selectChips].label}</h3>
          {chipData[selectChips].qas.map((qa, index) => (
            <div key={index}>
              <p>
                <b>Q.</b> {qa.question}
              </p>
              <p className="chip__ans">
                <b>A.</b> {qa.answer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
