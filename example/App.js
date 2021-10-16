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
                    <MessageBox type={"text"} style={{background:'blue'}} text={"hi"} notch={false} title={"jiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"} below={false} dateString={"20-12-1994"}/>
                    <MessageBox type={"text"} style={{background:'blue'}} text={"hi"} notch={false} title={"ji"} below={false} /> <MessageBox type={"text"} style={{background:'blue'}} text={"hi"} notch={false} title={"ji"}  dateString={"123"}/>

                        <Button background={'red'} />
                </div>
            </div>
            </div>
        );
    }
}

export default App;
