import { TTextAreaProps } from "./types";
import { TextField } from "@mui/material";

export function TextArea(props: TTextAreaProps) {
    return <TextField {...props} style={{ width: "100%" }} type="text" />;
}
