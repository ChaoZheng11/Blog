import React from 'react'

import Link from 'next/link'

import '../styles/globals.css'

import {Card,List,Affix} from 'antd'

const {Meta} = Card

const Sider =()=>{

    const data=[
        'LIFESTYLE',
        'FUTURE PLANS',
        'STUDY ABROAD'  
        
    ]

    return (
        <div>
            

            <Card hoverable>
                <div className="title"></div>
                <h1 style={{float:'left'}}>ABOUT ME</h1><br/><br/>
                <img src='../head.jpg' className='cardhead'></img>
                <p style={{textAlign:'justify'}}>Hi, I am Chao Zheng. As for now I'm aim to be a professional Web Developer. And I wanna share my life, future careers plans and experiences in this site. Welcome the discussion! "</p>
                <img src="../sign1.png" alt="" className='sign'/>
            </Card>

            <br/>
            <Card hoverable className="card2">
                <div className="title"></div>
                <h1 style={{float:'left'}}>TYPES</h1>
                
                <br/><br/>
                <List
                    
                    dataSource={data}
                    renderItem={item=>(
                        <List.Item>

                            <Link href={{pathname:'/types', query:{id: item.toLowerCase()}}}>
                                <a className="type">{item}</a>
                            </Link>
                                  
                        </List.Item>
                    )}
                >
                    
                </List>

            </Card>

            <br/>
            <Card hoverable className='card3'>
                <div className="title"></div>
                <h1 style={{float:'left'}}>NEWS</h1><br/><br/>
                
                <p style={{textAlign:'justify'}}>Recently I rewrote my blog framework and updated blog contents, so some contents are old. However, I will update new contents for future life...</p>
                
            </Card>

            
            
        </div>
    )

}

export default Sider