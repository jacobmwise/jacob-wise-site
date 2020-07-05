import React from 'react';

const Footer = () => {
    return (
        <div className="bg-info fixed-bottom d-flex justify-content-around border-top border-dark" style={{minHeight: "122px"}}>
            <div className="d-flex flex-column my-auto">
                <h5 className="mr-3">Contact</h5>
                <ul className="d-flex flex-column flex-lg-row" style={{listStyleType: 'none'}}>
                    <li className="mx-2">(914)330-1561</li>
                    <li className="mx-2">jmw555@cornell.edu</li>
                    <li className="mx-2">jmwise2000@gmail.com</li>
                </ul>
            </div>
            <div className="d-flex flex-column my-auto">
                <h5 className="mr-3">Social</h5>
                <ul className="d-flex flex-column flex-lg-row" style={{listStyleType: 'none'}}>
                    <li className="mx-2"><a href="https://www.linkedin.com/in/jacob-wise-b07470177/" className="text-dark"><i className="fa fa-linkedin fa-2x"></i></a></li>
                    <li className="mx-2"><a href="https://github.com/jacobmwise" className="text-dark" style={{color: 'black'}}><i className="fa fa-github fa-2x"></i></a></li>
                </ul>
            </div>
            <div className="d-flex flex-column my-auto">
                <h5 className="mr-3">Resume</h5>
                {/* <ul className="d-flex flex-column flex-lg-row" style={{listStyleType: 'none'}}>
                    <li className="mx-2"><a href="https://www.linkedin.com/in/jacob-wise-b07470177/" className="text-dark"><i className="fa fa-linkedin fa-2x"></i></a></li>
                    <li className="mx-2"><a href="https://github.com/jacobmwise" className="text-dark" style={{color: 'black'}}><i className="fa fa-github fa-2x"></i></a></li>
                </ul> */}
            </div>
        </div>
    );
};

export default Footer;