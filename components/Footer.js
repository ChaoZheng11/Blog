import React from 'react'

import '../styles/globals.css'
import { createFromIconfontCN } from '@ant-design/icons';

const Footer =()=>{
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_2313350_3j87y8wspsu.js',
    });

    return (
        <div style={{textAlign:'center'}} className='footer'>
            <img src="../logo1.png" alt=""/>

            <p className='footercontent'>WELCOME BLOG PAGES</p>

            <div className='footericon'>
                <a href="https://www.facebook.com/chao.zheng.7127" target="_blank">
                    <IconFont type="icon-facebook" style={{fontSize:'18px'}} className='headericon'/>
                </a>

                <a href="https://github.com/ChaoZheng11" target="_blank">
                    <IconFont type="icon-github" style={{fontSize:'18px'}} className='headericon'/>
                </a>

                <a href="mailto:maxzheng110@gmail.com">
                    <IconFont type="icon-googleplus" style={{fontSize:'18px'}} className='headericon'/>
                </a>

                <a href="https://www.linkedin.com/in/chao-zheng-b8918aa5/" target="_blank">
                    <IconFont type="icon-linkedin" style={{fontSize:'18px'}} className='headericon'/>
                </a>
            </div>

            

            <p>Copyright © 2021. Chao Zheng All Rights reserved.</p>
            
        </div>
    )

}

export default Footer