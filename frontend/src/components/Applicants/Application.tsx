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
    TextField,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {createApplication} from "../../clients/ApplicationRequestClient.ts";
import {ApplicationType} from "../../types/ApplicationType.ts";
import {ranks, selections} from "../../helpers/ApplicationHelpers.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {ApplicationYupSchema} from "../../helpers/ApplicationYupSchema.ts";
import ConfirmationSnackbar from "../ConfirmationSnackbar/ConfirmationSnackbar.tsx";
import {useState} from "react";


export default function Application() {
    const [showAlert, setShowAlert] = useState(false)

    const {
        control,
        formState: {errors},
        handleSubmit,
    } = useForm<ApplicationType>({
        resolver: yupResolver(ApplicationYupSchema)
    });



    const closeClick = () => {
        setShowAlert(false)
    }

    const onSubmit = (data: ApplicationType) => {
        const formData = new FormData();
        formData.append('application', new Blob([JSON.stringify({
            selection: data.selection,
            dodid: data.dodid,
            firstName: data.firstName,
            lastName: data.lastName,
            rank: data.rank
        })], {
            type: 'application/json'
        }))

        if (data.uploadedFile) {
            formData.append('uploadedFile', data.uploadedFile);
        }

        createApplication(formData)
            .then(() => {
                console.log(data)
                setShowAlert(true)
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <ConfirmationSnackbar open={showAlert} closeClick={closeClick}/>
            <Box
                textAlign={"center"}
                component={"form"}
                onSubmit={handleSubmit(onSubmit)}
                sx={{width: 500, margin: "auto"}}
            >
                <Typography variant={"h3"}>SORB Application</Typography>
                <Stack spacing={{xs: 2, sm: 1.07}} direction={"row"} useFlexGap flexWrap={"wrap"}>
                    <Controller
                        name={"selection"}
                        control={control}
                        render={({field}) => (
                            <RadioGroup  {...field} row>
                                {selections.map((selection) => (
                                    <FormControlLabel
                                        control={<Radio value={selection}/>}
                                        label={selection}
                                    />
                                ))}
                            </RadioGroup>
                        )}
                    />

                    <Controller
                        name={"dodid"}
                        control={control}
                        render={({field}) => (
                            <TextField
                                sx={{width: 450}}
                                {...field}
                                label={"DODID"}
                                variant={"outlined"}
                                error={!!errors.dodid}
                                helperText={errors.dodid?.message}
                            />
                        )}
                    />

                    <Controller
                        name={"firstName"}
                        control={control}
                        render={({field}) => (
                            <TextField
                                sx={{width: 225}}
                                {...field}
                                label={"First Name"}
                                variant={"outlined"}
                            />
                        )}
                    />

                    <Controller
                        name={"lastName"}
                        control={control}
                        render={({field}) => (
                            <TextField
                                sx={{width: 225}}
                                {...field}
                                label={"Last Name"}
                                variant={"outlined"}
                            />
                        )}
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
                    
                    <Controller
                        name={"uploadedFile"}
                        control={control}
                        render={({ field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                type={"file"}
                                // error={{!!error}}
                                // helperText={error ? error.message : null}
                                onChange={(e) => onChange(e.target.files[0])}
                                sx={{width: 450}}

                            />
                        )}
                    />
                </Stack>
                <Button variant={"outlined"} type={"submit"}>Submit</Button>
            </Box>
        </>
    )
}
