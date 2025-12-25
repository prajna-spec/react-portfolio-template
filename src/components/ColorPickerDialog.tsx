
import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import PaletteIcon from '@mui/icons-material/Palette'
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export type PaletteState = { primary: string; secondary: string };

type Props = {
  open: boolean;
  onClose: () => void;
  value: PaletteState;
  onChange: (next: PaletteState) => void;
};

function ColorPickerDialog({ open, onClose, value, onChange }: Props) {
  const [local, setLocal] = useState(value);

  useEffect(() => {
    if (open) setLocal(value);
  }, [open, value]);

  return (
    <Dialog open={open} onClose={onClose}>

      <DialogContent>
        <div style={{ marginBottom: "1rem" }}>
         
      <PaletteIcon style={{ marginRight: '8px' }} />
      <label>Color Time... </label>

          <input
            type="color"
            value={local.primary}
            onChange={(e) => setLocal({ ...local, primary: e.target.value })}
          />
        </div>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => {
            onChange(local);
            onClose();
          }}
        >
          Save
        </Button>
      </DialogActions>
       </Dialog>
  );

}

export default ColorPickerDialog;
