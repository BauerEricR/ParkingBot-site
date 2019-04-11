var React = require('react');
var logo = require('./ParkingBotLogoSmall.jpg');

function Header() {
let styles = {
  //margin: '50px',
  backgroundColor: 'blue',
  fontSize: '50%',
  textalign: 'center',
  //fontColor:'navyblue',
  //textAlign: 'center',
  height: '20px'
} ;
return(
  <div>
<img src = {logo} alt = 'Logo'/>
<header style= {styles}></header>
</div>

)
}

export default Header;
