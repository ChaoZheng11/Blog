import React, { Component } from 'react';

import {Carousel} from 'antd'

class Scollimg extends Component {
    render() {
        return (
            <div>

                <Carousel autoplay className="scoll">
                    <div>
                        <img src='../scoll1.jpeg' className="pic"></img>
                    </div>

                    <div>
                        <img src='../scoll2.jpeg' className="pic"></img>
                    </div>        

                    
                </Carousel>
                
            </div>
        );
    }
}

export default Scollimg;
