import { TTextInputProps } from "./types";
import { TextField } from "@mui/material";

export function TextInput(props: TTextInputProps) {
    return <TextField {...props} style={{ width: "100%" }} variant="standard" />;
}
