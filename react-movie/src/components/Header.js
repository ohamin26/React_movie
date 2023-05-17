import { Link } from 'react-router-dom';
import styles from '../css/Header.css';
import { useState } from 'react';

function Header() {
    const [changing, setChanging] = useState(false);
    const onMouseOverOut = () => {
        setChanging((current) => !current);
    };
    return (
        <div className="header">
            <nav
                className="nav"
                onMouseOver={onMouseOverOut}
                onMouseOut={onMouseOverOut}
            >
                <h1>
                    <Link to="/">Netflex</Link>
                </h1>
                <ul>
                    <li>
                        <Link
                            to="/animation"
                            style={
                                changing
                                    ? {
                                          color: '#000',
                                      }
                                    : { color: 'aliceblue' }
                            }
                        >
                            Animation
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sci-fi"
                            style={
                                changing
                                    ? {
                                          color: '#000',
                                      }
                                    : { color: 'aliceblue' }
                            }
                        >
                            Science Fiction
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/romance"
                            style={
                                changing
                                    ? {
                                          color: '#000',
                                      }
                                    : { color: 'aliceblue' }
                            }
                        >
                            Romance
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;
