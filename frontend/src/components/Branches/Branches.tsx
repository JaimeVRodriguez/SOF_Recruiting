import {Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllBranches} from "../../clients/ApplicationRequestClient.ts";
import {BranchType} from "../../types/BranchType.ts";

export default function Branches() {
    const [branches, setBranches] = useState<BranchType[]>([])

    useEffect(() => {
        getAllBranches()
            .then((data) => {
                setBranches(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <Box sx={{width: 550, margin: "auto"}} textAlign={"center"} alignContent={"center"}>
                <Typography>Branches</Typography>
                <Stack spacing={{xs: 2, sm: 1.07}} direction={"row"} useFlexGap flexWrap={"wrap"}>
                    {branches.map((branch) => (
                        <Card sx={{maxWidth: 250}}>
                            <CardMedia
                                component={"img"}
                                alt={branch.branch}
                                height={"140"}
                                image={"/static/images/cards"}
                            />
                            <CardContent>
                                <Typography gutterBottom variant={"h5"} component={"div"}>{branch.branch}</Typography>
                                <Typography variant={"body2"} color={"text.secondary"}>
                                    {branch.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size={"small"} href={"/application"}>Apply Now</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </>
    )
}