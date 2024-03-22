import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";

interface TextfieldProps {
    name: string,
    width: number
    label: string,
    control: any,
    errors: any
}

export default function Textfield({name, label, width, control, errors}: TextfieldProps) {
    return(
        <>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <TextField
                        sx={{width: width}}
                        {...field}
                        label={label}
                        variant={"outlined"}
                        error={!!errors[name]}
                        helperText={errors[name]?.message}
                    />
                )}
            />
        </>
    )
}