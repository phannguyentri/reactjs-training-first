import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a>Home</a></li>
                        <li><a>Page 1</a></li>
                        <li><a>Page 2</a></li>
                        <li><a>Page 3</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;