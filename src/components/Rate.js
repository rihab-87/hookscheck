import React from 'react';
import { Dropdown} from 'react-bootstrap';
import'./rate.css'
const Rate = ({handlerate}) => {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="light"  style={{fontFamily: "'Times New Roman', Times, serif",
    fontSize: "medium",
    fontWeight: 700,
     borderColor:"transparent",
     color:"#8d108d", backgroundColor:"transparent"}} id="dropdown-nav-basic">
         Rate </Dropdown.Toggle>
         
      
        <Dropdown.Menu>
          <Dropdown.Item  onClick={handlerate}>1</Dropdown.Item>
          <Dropdown.Item  onClick={handlerate}>2</Dropdown.Item>
          <Dropdown.Item  onClick={handlerate}>3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
}

export default Rate;
