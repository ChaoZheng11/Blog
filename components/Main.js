import React,{Component} from 'react'

import '../styles/globals.css'

import Link from 'next/link'

import Router from 'next/router'

import {Pagination,Space,Tag,Typography} from 'antd'

import {articleList} from './Data'

import { MessageOutlined, LikeOutlined, EyeOutlined} from '@ant-design/icons';

export class Main extends Component{

    constructor(props){
        super(props)
        this.state={
            min:0,
            max:3
        }
    }
     
    pageChange=value=>{
        if(value<=1){
            this.setState({
                min:0,
                max:3
            })
        }else{
            this.setState({
                min: (value-1)*3,
                max:(value-1)*3+3
            })
        }
    }

    render(){
        const IconText = ({ icon, text }) => (
            <Space>
              {React.createElement(icon)}
              {text}
            </Space>
          );
    
    return(
        <div>
            
            
            {articleList.slice(this.state.min,this.state.max).map((v,k)=>{
                return (
                    <div key={k} className='article'>
                        
                        

                        <div className="test">  
                            <Link href={{pathname:'/list',query:{id:v.id}}}>
                                <img src={v.imgurl} alt=""/>
                            </Link>
                        </div>
                        
                        
                        <div className="maincontent">

                            <div className='tagDate'>
                                <Tag color="#D0344E">{v.tag}</Tag> 
                                {v.date}
                            </div>
                            
                            <br/>

                            <Link href={{pathname:'/list',query:{id:v.id}}}>
                                <h1 className="articletitle">{v.title}</h1>
                            </Link>
                             <br/>

                            
                            
                            <Link href={{pathname:'/list',query:{id:v.id}}}>
                                    
                                <p className='articlecontent'>{v.content}</p> 
                                    
                            </Link>
                            
                            
                        </div>
                        
                    </div>
                )
            })} 


            <Pagination 
                defaultCurrent={1} 
                defaultPageSize={3}
                total={articleList.length} 
                onChange={this.pageChange}
                style={{textAlign:"center",marginTop:'80px', margin:'80px'}}
                className="page"
                
            >
                
            </Pagination>

            

        </div>
    )

}}

export default Main