import { FormControlLabel, Checkbox as Check } from "@mui/material";
import { TCheckboxProps } from "./types";

export function Checkbox({ label, disabled, isChecked, onCheck }: TCheckboxProps) {
    return (
        <FormControlLabel
            label={label}
            control={<Check disabled={disabled} checked={isChecked} onChange={onCheck} />}
        />
    );
}
