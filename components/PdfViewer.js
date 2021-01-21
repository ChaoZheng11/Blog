import React from 'react'

import {Button} from 'antd'

import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
class PdfViewer extends React.Component{

    
    state = {
        numPages: null,
        pageNumber: 1,
        pageWidth: 600
    }

    Next=()=>{
        const num=this.state.pageNumber
        
        this.setState({
            pageNumber:num+1
        })
           
    }

    Previous=()=>{
        this.setState({
            pageNumber:this.state.pageNumber-1
        })
    }

    
    
      
    render(){
        

    return (
        <div style={{maxWidth:'100%'}}>
            <div style={{textAlign:'center'}}>

            
            <Document file="../Chao-Zheng-Resume.pdf">
                    <Page pageNumber={this.state.pageNumber}
                        width={this.state.pageWidth}
                    />

                   
            </Document>

            <Button onClick={this.Previous} style={{marginRight:'10px'}}>Previous</Button>

            <Button onClick={this.Next}>Next</Button>
            </div>
            
         </div>
    );
    } 
}
  export default PdfViewer;