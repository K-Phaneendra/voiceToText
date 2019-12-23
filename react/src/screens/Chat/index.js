import React, { useEffect } from 'react';
import { getSampleData } from '../../actions/testAPI';

const Chat = () => {
  useEffect(() => {
    getSampleData()
  })
  return (
    <div>
      This is Chat screen
    </div>
  )
}

export default Chat;
