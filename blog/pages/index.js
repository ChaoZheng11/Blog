import Head from 'next/head'

import '../styles/globals.css'

import Header from '../components/Header'
import Sider from '../components/Sider'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Scollimg from '../components/Scollimg'

import {Row,Col,BackTop} from 'antd'

export default function Home() {

  

  return (
    
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Header/>
      
      <Row justify='center'>
        
        <Col xl={22} xxl={22} xs={24}>
          
          <Scollimg/>
        </Col>
        
      </Row>
      

      <Row className="main" justify="center" style={{width:'100%'}}>
        
        <Col sm={17} xs={20} md={18} lg={15} xl={12} xxl={10}>
          <Main/>
        </Col>

        <Col md={0}></Col>

        <Col sm={15} xs={15} md={13} lg={{span:7,offset:1}} xl={6} xxl={5}>
          
          <Sider/>
        </Col> 
       
      </Row>

      

      <Footer/> 

      <BackTop/>
      
      
    </div>
    
  )
}
