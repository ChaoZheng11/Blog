import React, {Component} from 'react';

import Head from 'next/head'

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(import('../components/PdfViewer'), { ssr: false });

class Pdf extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>

         <Head>
            <title>About Me</title>
        </Head>

        <PDFViewer />
      </div>
    );
  }
}

export default Pdf