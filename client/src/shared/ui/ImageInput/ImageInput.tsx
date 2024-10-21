import { TImageInputProps } from "./types";
import { DefaultImage } from "@/shared/assets";
import { TextField } from "@mui/material";

export function ImageInput(props: TImageInputProps) {
    return (
        <>
            {!props.disabled && (
                <TextField {...props} style={{ width: "100%" }} variant="standard" />
            )}

            {props.value && (
                <div className="mt-4">
                    <img src={props.value || DefaultImage} alt="" />
                </div>
            )}
        </>
    );
}
