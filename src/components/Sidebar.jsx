function Sidebar() {

    return (
        <div style={{
            width: "200px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
        }} className="sidebar">
            <h1>System Pane</h1>
            <hr style={{ width: "100%" }} />

            <a href="/dp/cpu">CPU</a>
            <a href="/dp/gpu">GPU</a>
            <a href="/dp/ram">RAM</a>
            <a href="/dp/disk">Disk</a>
            <a href="/dp/network">Network</a>

        </div>
    );

}

export default Sidebar;
