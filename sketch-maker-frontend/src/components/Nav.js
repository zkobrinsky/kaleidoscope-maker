import React from 'react';
import {Link}  from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/sketches/new'>
                    Create
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                    Back to Sandbox
                    </Link>
                </li>
                <li>
                    <Link to='/sketches'>
                    Index
                    </Link>
                    </li>
            </ul>
        </div>
    )
}

export default Nav