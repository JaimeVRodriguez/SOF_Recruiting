import {AppBar, Box, MenuItem, Stack} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";

export default function AppNavbar() {
    const navigate = useNavigate();
    return (
        <>
            <AppBar position="sticky" sx={{height: 64, p: 0}}>
                <Stack direction="row" alignItems="center" py={1.5} px={3}>
                    <Box>
                        {/*<img/>*/}
                    </Box>
                    <MenuItem
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            navigate("/application");
                        }}
                    >
                        Start Application
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            navigate("/recruiter");
                        }}
                    >
                        Recruiters
                    </MenuItem>
                </Stack>
            </AppBar>
            <Outlet/>
        </>
    );
}
