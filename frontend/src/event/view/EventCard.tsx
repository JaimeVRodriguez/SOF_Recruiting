import {useEffect, useState} from "react";
import {EventType} from "../type/EventType.ts";
import {Avatar, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import liberty from "../../assets/liberty.png";
import {getAllEvents} from "../client/EventClient.ts";


//TODO: Need to create test
//TODO: Move card to it's own component

export default function EventCard() {
    const [events, setEvents] = useState<EventType[]>([])

    useEffect(() => {
        getAllEvents()
            .then((data) => {
                setEvents(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return(
        <>
            {events.map((event) => (
                <Card sx={{maxWidth: 345}}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={"recipe"}>
                                S
                            </Avatar>
                        }
                        title={event.name}
                        subheader={event.date}
                    />
                    <CardMedia
                        component={"img"}
                        height={"194"}
                        image={liberty}
                        alt={event.base}
                    />
                    <CardContent>
                        <Typography variant={"body2"}>
                            {event.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}