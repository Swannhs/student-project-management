import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import Header from "../navbar/Header";
import Footer from "../footer/Footer";

const AdminLayout = props => {
    return (
        <div className='wrapper'>
            <Sidebar/>
            <div className='main-panel'>
                <Header/>
                <div className='content'>
                    <div className="content">
                        <div className="container-fluid">
                            {props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default AdminLayout;
