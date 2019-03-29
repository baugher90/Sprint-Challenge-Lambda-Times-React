import React from 'react';
import moment from 'moment';
import { Temp, H1, Date, HeaderCont } from './StyledComponents';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderCont className="header">
      <Date className="date">{moment().format("MMM Do YY")}</Date>
      <H1>Lambda Times</H1>
      <Temp className="temp">98°</Temp>
    </HeaderCont>
  )
}

export default Header