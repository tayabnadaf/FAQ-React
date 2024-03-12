import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Chips.css";
export default function ClickableLinkChips() {
  return (
    <div className="chips">
      <Stack direction="row" spacing={2}>
        <Chip
          label="General FAQs"
          component="a"
          href="#basic-chip"
          clickable
        />
        <Chip
          label="Untitled UI Icons"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
        <Chip
          label="Webflow Library"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </Stack>
    </div>
  );
}
