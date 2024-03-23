import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllApplications} from "../../clients/ApplicationRequestClient.ts";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {ApplicationType} from "../../application/type/ApplicationType.ts";

//TODO: Need a test for this page

export default function Recruiter() {
    const [applications, setApplications] = useState<ApplicationType[]>([])

    useEffect(() => {
        getAllApplications()
            .then((data) => {
                const applicationWithStatus = data.map(app => ({...app, status: 'Submitted'}));
                setApplications(applicationWithStatus);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const rows: GridRowsProp = applications;

    const columns: GridColDef[] = [
        {field: "branch", headerName: "Selection Group", width: 125},
        {field: "dodid", headerName: "DODID", width: 125},
        {field: "rank", headerName: "Rank", width: 125},
        {field: "firstName", headerName: "First Name", width: 125},
        {field: "lastName", headerName: "Last Name", width: 125},
        {field: 'mos', headerName: 'MOS', width: 125}
    ]

    return (
        <>
            <Typography>Recruiter</Typography>
            <DataGrid
                columns={columns}
                rows={rows}
                disableVirtualization
            />
        </>
    )
}