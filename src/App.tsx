import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";

import Home from "./pages/Home";

import Cpu from "./datapoints/Cpu";
import Gpu from "./datapoints/Gpu";
import Ram from "./datapoints/Ram";
import Disk from "./datapoints/Disk";
import Network from "./datapoints/Network";

function App() {

    return (
        <div style={{
            display: "flex",
            width: "100vw",
            minHeight: "100%",
        }}>
            <BrowserRouter>
                <Routes>

                    <Route index element={<Home />} />

                    {/* The `dp` stands for `datapoint` */}
                    <Route path="/dp/cpu"     element={<Cpu     />} />
                    <Route path="/dp/gpu"     element={<Gpu     />} />
                    <Route path="/dp/ram"     element={<Ram     />} />
                    <Route path="/dp/disk"    element={<Disk    />} />
                    <Route path="/dp/network" element={<Network />} />

                </Routes>
            </BrowserRouter>
            <Sidebar />

        </div>
    );
}

export default App;
