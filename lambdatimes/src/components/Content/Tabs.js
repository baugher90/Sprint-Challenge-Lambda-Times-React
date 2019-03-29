import React from 'react';
import Tab from './Tab';
import { TabsCont, Topics, Title } from '../StyledComponents';
const Tabs = props => {
  return (
    <TabsCont className="tabs">
      <Topics className="topics">
        <Title className="title">TRENDING TOPICS:</Title>
        {props.tabs.map((tab,index)=>(
        <Tab 
        key={index}
        selectTabHandler={props.selectTabHandler}
        selectedTab={props.selectedTab}
        tab={tab}
        />))}
      </Topics>
    </TabsCont>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
