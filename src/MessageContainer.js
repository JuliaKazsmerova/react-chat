import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

export default class MessageContainer extends React.Component {

  addMessage(message){
    const {mqtt} = this.props;
    mqtt.publish('upjs/ds/tutorial/react', message);
  }

  render(){
    return (
      <div>
        <MessageForm onSubmit={this.addMessage.bind(this)} />
        <MessageList data={this.props.data} />
      </div>
    )
  }
}
