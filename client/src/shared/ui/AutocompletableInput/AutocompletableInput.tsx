import { Autocomplete, TextField } from "@mui/material";
import { TAutocompletableInputProps } from "./types";
import { SyntheticEvent, useState } from "react";

export function AutocompletableInput<Type>(props: TAutocompletableInputProps<Type>) {
    const [inputValue, setInputValue] = useState("");
    const [value, _] = useState<Type | null>(null);

    const handleChange = (_: SyntheticEvent, newValue: Type | null) => {
        if (newValue !== null) {
            props.onChange(newValue);
        }
    };

    return (
        <Autocomplete
            disablePortal
            value={value}
            onChange={handleChange}
            options={props.options}
            renderInput={(params) => <TextField {...params} variant="standard" />}
            renderOption={props.renderOption}
            onInputChange={(_, val) => setInputValue(val)}
            getOptionLabel={props.getOptionLabel}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    props.onSubmit(inputValue);
                }
            }}
        />
    );
}
