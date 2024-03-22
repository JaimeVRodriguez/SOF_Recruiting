import {Alert, Snackbar} from "@mui/material";
import {createContext, useContext, useState} from "react";
import {SnackbarContext} from "../type/SnackbarContext.tsx";

const context = createContext<SnackbarContext>({} as SnackbarContext);

export const SnackbarProvider = (props: {children: React.ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const openSnackbar = (message: string) => {
        setIsOpen(true);
        setMessage(message);
    };

    const closeSnackbar = () => {
        setIsOpen(false);
        setMessage('');
    };


    return (
        <>
            <context.Provider value={{ openSnackbar }}>
                {props.children}
                <Snackbar
                open={isOpen}
                autoHideDuration={4000}
                onClose={closeSnackbar}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                >
                    <Alert
                    onClose={closeSnackbar}
                    severity={'success'}
                    variant={'filled'}
                    sx={{width: '100%'}}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            </context.Provider>
        </>
    )
}

export const useSnackbar = () => useContext(context);