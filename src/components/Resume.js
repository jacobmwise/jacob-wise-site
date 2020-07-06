import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
  
    render() {
        return (
            <div className="bg-light" style={{height: '100vh'}}>
                <Nav />

                <Document file="/files/resume.pdf">
                    <Page pageNumber={1} />
                </Document>

                <Footer />
            </div>
        );
    }
}

export default Resume;