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
                    <MessageBox type={"text"} style={{background:'blue'}} text={"hi"} notch={false} title={"ji"} below={true} date={"20-12-1994"}/>
                    <MessageBox type={"text"} style={{background:'blue'}} text={"hi"} notch={false} title={"ji"} below={true} date={new Date().getTime()}/> <MessageBox type={"text"} style={{background:'blue'}} text={"hi"} notch={false} title={"ji"}  date={"123"}/>

                        <Button background={'red'} />
                </div>
            </div>
            </div>
        );
    }
}

export default App;
