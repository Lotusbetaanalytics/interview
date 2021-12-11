import React from "react";
import "./Infobox.css";

function Infobox({ title, count, Icon, color }) {
    return (
        <div className="infobox">
            <div className="grid">
                <div className="card">
                    <p>{title}</p>
                    <h1>{count}</h1>
                </div>
                <div className="card">
                    <Icon style={{ color: color }} />
                </div>
            </div>
        </div>
    );
}

export default Infobox;
