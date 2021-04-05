import React, { FC } from 'react';
import { HeartFill } from "react-bootstrap-icons";

const Footer: FC = () => {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className='footer footer-alt text-center mt-auto text-white p-2' style={{ backgroundColor: '#001529' }}>
            <p>Made with < HeartFill className='text-danger' /> - {year} - </p>
        </footer>
    )
}

export { Footer }