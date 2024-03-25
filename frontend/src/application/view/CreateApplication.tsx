import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {createApplication} from "../client/ApplicationClient.ts";
import {ApplicationType} from "../type/ApplicationType.ts";
import {branches, ranks} from "../helper/ApplicationHelpers.ts";
import {yupResolver} from '@hookform/resolvers/yup';
import {ApplicationYupSchema} from "../helper/ApplicationYupSchema.ts";
import {useSnackbar} from "../../snackbar/provider/SnackbarProvider.tsx";
import {SnackbarContext} from "../../snackbar/type/SnackbarContext.tsx";
import Textfield from "./Textfield.tsx";

export default function CreateApplication() {
    const {openSnackbar} = useSnackbar() as SnackbarContext;
    const {
        control,
        formState: {errors},
        handleSubmit,
    } = useForm<ApplicationType>({
        resolver: yupResolver(ApplicationYupSchema)
    });

    const onSubmit = (formData: ApplicationType) => {
        createApplication(formData)
            .then(() => {
                openSnackbar('Success')
                console.log(formData)
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <Box
                textAlign={"center"}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
                sx={{width: 500, margin: "auto"}}
            >
                <Typography variant={"h3"}>SORB Application</Typography>
                <Stack spacing={{xs: 2, sm: 1.07}} direction={"row"} useFlexGap flexWrap={"wrap"}>
                    <Controller
                        name={"branch"}
                        control={control}
                        render={({field}) => (
                            <RadioGroup  {...field} row>
                                {branches.map((selection) => (
                                    <FormControlLabel
                                        control={<Radio value={selection}/>}
                                        label={selection}
                                    />
                                ))}
                            </RadioGroup>
                        )}
                    />

                    <Textfield
                        name={'dodid'}
                        label={"DODID"}
                        width={450}
                        control={control}
                        errors={errors}
                    />

                    <Textfield
                        name={'firstName'}
                        label={'First Name'}
                        width={225}
                        control={control}
                        errors={errors}
                    />

                    <Textfield
                        name={'lastName'}
                        width={225}
                        label={'Last Name'}
                        control={control}
                        errors={errors}
                    />

                    <Controller
                        name={"rank"}
                        control={control}
                        render={({field}) => (
                            <FormControl>
                                <InputLabel id={"rank"}>Rank</InputLabel>
                                <Select
                                    sx={{width: 120}}
                                    variant={"filled"}
                                    labelId={"rank"}
                                    {...field}
                                >
                                    {ranks.map((rank) => (
                                        <MenuItem key={rank} value={rank}>{rank}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                    />

                    <Textfield name={'mos'} width={120} label={'MOS'} control={control} errors={errors}/>
                </Stack>
                <Button variant={"outlined"} type={"submit"}>Submit</Button>
            </Box>
        </>
    )
}
