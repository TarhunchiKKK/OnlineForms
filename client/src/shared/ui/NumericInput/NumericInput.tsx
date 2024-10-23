import { TNumericInputProps } from "./types";
import { TextField } from "@mui/material";

export function NumericInput(props: TNumericInputProps) {
    return <TextField type="number" size="small" style={{ width: "100%" }} {...props} />;
}
