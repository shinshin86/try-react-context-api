import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ThemeChanger from './SimpleExample/ThemeChanger'

export default class TabContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Tabs>
        <TabList>
          <Tab>Simple Example</Tab>
          <Tab>2nd Example</Tab>
        </TabList>

        <TabPanel>
          <ThemeChanger />
        </TabPanel>
        <TabPanel>
        </TabPanel>
      </Tabs>
    )
  }
}
