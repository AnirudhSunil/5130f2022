import GTAV from './pages/GTAV';
import React, {useState} from 'react'
function App() {
  return (
    
     <Navbar>
       <NavItem icon="😀">
         <DropdownMenu1></DropdownMenu1>
       </NavItem>
       <NavItem icon="😀">
         <DropdownMenu2></DropdownMenu2>
       </NavItem>
       <NavItem icon="😀">
        <DropdownMenu3></DropdownMenu3>
      </NavItem>
    </Navbar>
    
  );
}

function Navbar(props) {
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu1() {
  function DropdownMenuItem1(props){
    return(
      <a href='#' className='menu-item'>{props.children}</a>
    );
  }
  return(
   <div className='dropdown'>
    <DropdownMenuItem1>Entry Level</DropdownMenuItem1>
    <DropdownMenuItem1>Intermediate Level</DropdownMenuItem1>
    <DropdownMenuItem1>Professional Level</DropdownMenuItem1>
   </div> 
  );
}

function DropdownMenu2() {
  function DropdownMenuItem2(props){
    return(
      <a href='#' className='menu-item'>{props.children}</a>
    );
  }
  return(
   <div className='dropdown'>
    <DropdownMenuItem2>CPU Coolers</DropdownMenuItem2>
    <DropdownMenuItem2>RAM</DropdownMenuItem2>
    <DropdownMenuItem2>Graphics</DropdownMenuItem2>
    <DropdownMenuItem2>Mouse</DropdownMenuItem2>
   </div> 
  );
  }
  function DropdownMenu3() {
    function DropdownMenuItem3(props){
      return(
        <a href='#' className='menu-item'>{props.children}</a>
      );
    }
    return(
     <div className='dropdown1'>
      <DropdownMenuItem3>GTA V</DropdownMenuItem3>
      <DropdownMenuItem3>League of Legends</DropdownMenuItem3>
      <DropdownMenuItem3>Call of Duty</DropdownMenuItem3>
      <DropdownMenuItem3>Fortnite</DropdownMenuItem3>
     </div> 
    );
  }

export default App;
