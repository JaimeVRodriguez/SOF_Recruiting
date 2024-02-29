import {Snackbar} from "@mui/material";

interface ConfirmationAlertProps {
    open: boolean
    closeClick: () => void
}

export default function ConfirmationSnackbar({open, closeClick}: ConfirmationAlertProps) {
    return (
        <>
            <Snackbar
                autoHideDuration={5000}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
                open={open}
                onClose={closeClick}
                message={"Success"}
            />
        </>
    )
}