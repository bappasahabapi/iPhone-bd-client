import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    return (
        <div>
            <h1>Add an User</h1>
            <Link Link to="/register"> <button

                className="btn-warning  p-2 mt-3 fw-bold border-0 rounded-pill"  >

                🟢  Click here to add an user 🕵️‍♀️
            </button></Link>

        </div >
    );
};

export default AddUser;