import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Chart from "../components/Chart";

function Home() {

    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name }));
    }

    return (

        <div className="container">
            <h1>This is the home page!</h1>
            <Chart />
        </div>

    );
}

export default Home;
