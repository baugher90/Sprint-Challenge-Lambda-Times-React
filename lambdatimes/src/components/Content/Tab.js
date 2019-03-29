import React from 'react';
import PropTypes from 'prop-types';
import { TabCont } from '../StyledComponents';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

    if(props.selectedTab === "all") {
      return (
        <TabCont
          className={'active'}
          onClick={ () => {
            console.log("tabClicked" , props.tab)
            props.selectTabHandler( props.tab )} }
        >
          {props.tab.toUpperCase()}
        </TabCont>
      ) 
    }else

  return (
    <TabCont
      className={''}
      onClick={ () => {
        console.log("changeClicked" , props.tab)
        props.selectTabHandler( props.tab )} 
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }
    >
      {props.tab.toUpperCase()}
    </TabCont>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
};

export default Tab;
