import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="copyright float-right">
                        ©
                        {new Date().getFullYear()} made by Swann
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
