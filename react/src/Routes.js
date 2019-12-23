import React from 'react';
import {
  Switch, Route
} from 'react-router-dom';
import ComponentLayout from './Layout/ComponentLayout';
import TestScreen from './screens/TestScreen';
import Chat from './screens/Chat';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/chat">
          <ComponentLayout heading={'Users can chat in this screen'}>
            <Chat />
          </ComponentLayout>
        </Route>
        <Route path="/testScreen">
          <ComponentLayout>
            <TestScreen />
          </ComponentLayout>
        </Route>
      </Switch>
    );
  }
}

export default Routes;