import React from "react";
import "../css/admin.css";
import TaskTable from "../Components/TaskTable";
import TeamTable from "../Components/TeamTable";

function Admin(){
    return(
        <div className="admin">
            <div className="admin-header">
                <div className="header-nav">
                    <nav classname="nav">
                        <a href="#team-management">Team</a>
                        <a href="#tasks-admin-view">Task</a>
                    </nav>
                </div>
            </div>
            <div id="team-management">
                <h1>Team Management</h1>
                    <TeamTable />
            </div>
            <div id="tasks-admin-view">
                <h1>Tasks </h1>
                <TaskTable />
            </div>
            
        </div>
    );
}

export default Admin;