import React from 'react';
import { TopCont, Cont, ContLeft, ContCenter, ContRight, ContCenterSpan } from './StyledComponents';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopCont className="top-bar">
      <Cont className="container">
        <ContLeft className="container-left">
          <span>TOPICS</span>
          <span>SEARCH</span>
        </ContLeft>
        <ContCenter className="container-center">
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </ContCenter>
        <ContRight className="container-right">
          <span>LOG IN</span>
        </ContRight>
      </Cont>
    </TopCont>
  )
}

export default TopBar;