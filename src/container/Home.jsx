import React, {Component} from 'react';
import YouTube from '../components/YouTube';

class Home extends Component {
    render(){
        return (
            <div>
                <p>YouTube Component</p>
                <hr/>
                <YouTube time="7.12" title="React JS Tutorial"/>
                <YouTube time="6.12" title="Angular JS Tutorial"/>
                <YouTube time="3.12" title="Vuejs JS Tutorial"/>
                <YouTube/>
            </div>
        )

        
    }

    
    
}


export default Home;
