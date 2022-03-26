import React from 'react';
import Sidebar from "../sidebar/Sidebar";

const AdminLayout = props => {
    return (
        <div className='wrapper'>
            <Sidebar/>
            <div className='main-panel'>
                <div className='content'>
                    <div className="content">
                        <div className="container-fluid">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
