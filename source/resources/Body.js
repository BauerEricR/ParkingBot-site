var React = require('react');

function Body() {
  var styles = {
    margin: '50px',
    fontSize: '120%'
  };

    var styles2 = {
      marginLeft: '80px',
    };

return(
  <div>
  <h1 style = {styles2}>Abstract</h1>
<p style ={styles}>
ParkingBot is a software solution that attempts to solve the problem of finding an open parking space in the city. Everyone struggles with finding parking in the city at some point. In fact, the average Chicagoan spends 56 hours each year looking for parking. ParkingBot aims to reduce the time spent and frustration caused by searching for parking by giving users an organized website providing information for finding an open spot easily. We will be implementing computer vision to check the status of parking lots through the use of visible light security camera data most often present in parking lots. Our program, written with Python Tensorflow, will generate the algorithm from a set of known input data. The program is “trained”, which involves feeding the program with pictures giving it a variety of images to study from, which are then used to guide the program when given an image from the parking lot cameras. The algorithm will then be applied to the real-time input data from parking lot cameras to find open parking spaces. The parking space information will then be sent to a website where users can check on the status of a lot or check for alternative spots in a lot nearby. Testing this program involves running trail and error through the program to see which different outcomes can be found until a desired output is achieved. Once testing is complete, the data will be exported to the website and ready to be displayed for users.
</p>
</div>
)
}

export default Body;
