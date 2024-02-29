import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./ApplicationRoutes";

export default function App() {
    return (
            <BrowserRouter>
                <main>
                    <ApplicationRoutes />
                </main>
            </BrowserRouter>
    );
}
