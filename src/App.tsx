import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name }));
    }

    return (
        <div style={{
            display: "flex",
            width: "100vw",
            minHeight: "100%",
        }}>
            <Sidebar />

            <div className="container">

                <h1>CPU Utilization</h1>
                <Chart />

                <form
                    className="row"
                    onSubmit={(e) => {
                        e.preventDefault();
                        greet();
                    }}
                >
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Enter a name..."
                    />
                    <button type="submit">Greet</button>
                </form>

                <p>{greetMsg}</p>
            </div>
        </div>
    );
}

export default App;
