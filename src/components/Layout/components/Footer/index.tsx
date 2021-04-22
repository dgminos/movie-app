import React, { FC } from 'react';
import { HeartFill } from "react-bootstrap-icons";


const Footer: FC = () => {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className='footer footer-alt text-center mt-auto text-white py-3' style={{ backgroundColor: '#001529', fontSize: 15 }}>
            <p className="m-0">Made with < HeartFill className='text-danger' /> Movie App 🎥 - {year} - </p>
        </footer>
    )
}

export { Footer }