import React from 'react';
import TaskTable from '../Components/TaskTable';

function Home(){
    return(
        <div className="home-header">
            <h1>Hi User</h1>
            <TaskTable />
        </div>
    ) 
};

export default Home;