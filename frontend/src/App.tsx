import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./ApplicationRoutes";
import {SnackbarProvider} from "./components/SnackbarProvider/provider/SnackbarProvider.tsx";

export default function App() {
    return (
            <BrowserRouter>
                <SnackbarProvider>
                <main>
                    <ApplicationRoutes />
                </main>
                </SnackbarProvider>
            </BrowserRouter>
    );
}
