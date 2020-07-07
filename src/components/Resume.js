import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import throttle from 'lodash.throttle';

import Nav from './subcomponents/Nav';
import Footer from './subcomponents/Footer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
			PDFWidth: null
        }
        this.myInput = React.createRef()
    }

    throttledSetPDFWidth = () => {
        throttle(this.setPDFWidth, 500);
    }
    
    componentDidMount() {
        // setting width at initial
        this.setPDFWidth()

        // event listener when window is resized
        window.addEventListener('resize', this.throttledSetPDFWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttledSetPDFWidth);
    }

	setPDFWidth = () => {
        const width = this.myInput.current.offsetWidth;
        const width90 = width * 0.9;
        console.log(width);
        console.log(width90);
        this.setState({ PDFWidth: width90 })
    }
  
    render() {
        return (
            <div className="bg-light" style={{height: '100vh'}}>
                <Nav />
                
                <div ref={this.myInput}>
                    <Document
                        file="/files/resume.pdf"
                        // onLoadError={console.error}
                        // onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={1} />
                    </Document>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Resume;