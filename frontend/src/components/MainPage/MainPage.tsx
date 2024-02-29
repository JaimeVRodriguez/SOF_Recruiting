import {Divider, Link, Stack, Typography} from "@mui/material";
import EventCard from "../EventCard/EventCard.tsx";

export default function MainPage() {
    return(
        <>
            <Stack textAlign={"center"}>
                <Typography variant={"h3"}>Special Operations Recruiting Battalion</Typography>
                <Divider/>
                <Link href={"/branches"}>Explore Branches</Link>
                <Divider/>
                <Typography variant={"h4"}>Events</Typography>
                <Divider/>

                <EventCard/>
            </Stack>
        </>
    )
}