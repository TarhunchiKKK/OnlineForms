import { TDropdownProps } from "./types";
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export function Dropdown({ label, options, value, onSelect, disabled }: TDropdownProps) {
    const handleSelect = (e: SelectChangeEvent) => {
        onSelect(e.target.value as string);
    };

    return (
        <Box>
            <FormControl fullWidth>
                <Select label={label} value={value} onChange={handleSelect} disabled={disabled}>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
