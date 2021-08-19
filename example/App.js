import React, { Component } from 'react';
import {
    MessageBox,
    ChatItem,
    ChatList,
    SystemMessage,
    MessageList,
    Input,
    Button,
    Avatar,
    Navbar,
    SideBar,
    Dropdown,
    Popup,
    MeetingList,
} from '../src';


export class App extends Component {

    constructor(props) {
        super(props);


    }
render(){
        return (
            <div className='container'>
                <div
                    className='chat-list'>
                    
                <div
                    className='right-panel'>
                    <MessageBox type={"text"} text={"hi"} notch={false} title={"ji"} below={false}/>

                   
                </div>
            </div>
            </div>
        );
    }
}

export default App;
