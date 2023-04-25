import React from 'react'

import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                App Header
                <nav>
                    <ul>
                        <li>
                            <Link to={`/season/2005`}>2005</Link>
                        </li>
                        <li>
                            <Link to={`/season/2006`}>2006</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default App
