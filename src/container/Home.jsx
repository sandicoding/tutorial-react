import React, {Component} from 'react';
import YouTube from '../components/YouTube';

class Home extends Component {
    render(){
        return (
            <div>
                <p>YouTube Component</p>
                <hr/>
                <YouTube 
                    time="7.12" 
                    title="React JS Tutorial"
                    desc="200x ditonton. 10 hari yang lalu"/>
                <YouTube 
                    time="6.12" 
                    title="Angular JS Tutorial"
                    desc="2002x ditonton. 8 hari yang lalu"/>
                <YouTube 
                    time="3.12" 
                    title="Vuejs JS Tutorial"
                    desc="2000x ditonton. 2 hari yang lalu"/>
                <YouTube/>
            </div>
        )

        
    }

    
    
}


export default Home;
