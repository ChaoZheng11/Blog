import React from 'react';

import Head from 'next/head'

import {withRouter} from 'next/router'

import {articleList} from '../components/Data'

import {Tag,Row, Col,BackTop} from 'antd'

import '../styles/globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sider from '../components/Sider'
import Comments from '../components/Comments'
 
const List =({router})=> {

    var id=parseInt(router.query.id)
    
    return (
        <div>
             <Head>
                <title>Article</title>
            </Head>
            
            <Header/>
            

             <Row justify='center' >

                

                <Col sm={17} xs={20} md={18} lg={15} xl={12} xxl={10}>
                
                    {
                        articleList.filter(value=>parseInt(value.id)===id).map((v,k)=>{
                            return (
                                <div className='list' key={k}>
                                    
                                    <div className='listimg'>
                                        <img src={v.imgurl} alt="" style={{width:'100%'}}/>
                                    </div>
                                    
                                    
                                    
                                    <div className='content'>
                                        <div className='listTag'>
                                            <Tag color="#D0344E">{v.tag}</Tag>
                                            {v.date}
                                        </div>

                                        <br/>
                                        <br/>

                                        <h1 className='listtitle'>{v.title}</h1>

                                        <br/>

                                        <div style={{textAlign:'center'}}>
                                            <img src={v.detailimg1} alt="" style={{width:'80%', textAlign:'center',marginBottom:'10px'}}/>

                                            <img src={v.detailimg2} alt="" style={{width:'80%', textAlign:'center'}}/>
                                        </div>

                
                                        <div>
                                            <p className='listcontent'>{v.content}</p>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    
                                </div>
                            )
                        })
                    }

                    <div style={{backgroundColor:'rgb(255, 255,255)', marginTop:'80px',marginBottom:'80px',width:'100%'}}>
                        <Comments/>
                    </div>
                    
                    
                </Col>

                <Col sm={22} xs={22} md={{span:14,offset:1}} lg={{span:7,offset:1}} xl={6} xxl={5}>
          
                    <Sider/>
                </Col> 
            </Row> 

            
            <BackTop/>
            <Footer/>

            
           
        </div>
    )
    
}  



  



 
export default withRouter(List);