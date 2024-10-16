import "./Sidebar.css";

function Sidebar() {

    return (
        <div className="sidebar">

            <h1><a href="/">System Pane</a></h1>
            <hr />

            <a href="/dp/cpu">CPU</a>
            <a href="/dp/gpu">GPU</a>
            <a href="/dp/ram">RAM</a>
            <a href="/dp/disk">Disk</a>
            <a href="/dp/network">Network</a>

        </div>
    );

}

export default Sidebar;
