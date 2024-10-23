import { colors } from "@/shared/constants";
import { TSwitchProps } from "./types";
import { FormControlLabel, Switch as MuiSwitch, styled } from "@mui/material";

const StyledSwitch = styled(MuiSwitch)(() => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: colors.green.primary,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: colors.green.primary,
    },
}));

export function Switch({ label, ...switchProps }: TSwitchProps) {
    return <FormControlLabel label={label} control={<StyledSwitch {...switchProps} />} />;
}
