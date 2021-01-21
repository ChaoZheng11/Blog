import React from 'react'
import { articleList } from '../components/Data'

import {withRouter} from 'next/router'
import Link from 'next/link'

import Head from 'next/head'

import {Tag,Row,Col,BackTop} from 'antd'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sider from '../components/Sider'

import '../styles/globals.css'


const Types =({router})=>{

    var id=router.query.id

    return(
        <div>
             <Head>
                <title>Types</title>
            </Head>

            <Header/>

            <Row justify='center'>

                

                <Col sm={17} xs={20} md={18} lg={15} xl={12} xxl={10}>

                    {
                        articleList.filter(value=> value.tag.toLowerCase()==id).map((v,k)=>{
                            return (
                                <div key={k} className='types'>
                                    
                                    <div className='typeimg'>
                                        <Link href={{pathname:'/list', query:{id:v.id}}}>
                                            <img src={v.imgurl} alt=""/>
                                        </Link>
                                    </div>
                                    
                                    <br/>
                                    
                                    
                                    <div className='typescontent'>
                                        <div className='typesTag'>
                                            <Tag color="#D0344E">{v.tag}</Tag>
                                            {v.date}
                                        </div>

                                        <br/>

                                        <Link href={{pathname:'/list', query:{id:v.id}}}>
                                            <h1 className='typetitle'>{v.title}</h1>
                                        </Link>
                                        
                                        <br/>

                                        <Link href={{pathname:'/list', query:{id:v.id}}}>
                                            <p className='typecontent'>
                                                {v.content}
                                            </p>
                                        </Link>
      
                                    </div>   
                                </div>
                            )
                        })
                    }

                </Col>

                <Col sm={18} xs={18} md={{span:14,offset:1}} lg={{span:7,offset:1}} xl={6} xxl={5}>

                    <Sider/>
                </Col> 
            </Row> 


            <Footer/>

            <BackTop/>
        </div>
    )


}

export default withRouter(Types);