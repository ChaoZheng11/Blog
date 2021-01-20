import React, {Component} from 'react';

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(import('../components/PdfViewer'), { ssr: false });

class Pdf extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <PDFViewer />
      </div>
    );
  }
}

export default Pdf