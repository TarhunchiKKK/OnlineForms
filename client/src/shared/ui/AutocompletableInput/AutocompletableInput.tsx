import { Autocomplete, TextField } from "@mui/material";
import { TAutocompletableInputProps } from "./types";
import { KeyboardEvent, SyntheticEvent, useState } from "react";

export function AutocompletableInput<Type>(props: TAutocompletableInputProps<Type>) {
    const [inputValue, setInputValue] = useState("");
    const [value, _] = useState<Type | null>(null);

    const handleChange = (_: SyntheticEvent, newValue: Type | null) => {
        if (newValue !== null) {
            props.onChange(newValue);
        }
    };

    const handleInputChange = (_: SyntheticEvent, val: string) => {
        setInputValue(val);

        if (props.onInputChange) {
            props.onInputChange(val);
        }
    };

    const handleSubmit = (e: KeyboardEvent) => {
        if (e.key === "Enter" && props.onSubmit) {
            props.onSubmit(inputValue);
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
            onInputChange={handleInputChange}
            getOptionLabel={props.getOptionLabel}
            onKeyDown={handleSubmit}
        />
    );
}
