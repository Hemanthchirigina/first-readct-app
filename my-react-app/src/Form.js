import React from 'react'
import "./Form.css";

function Form(){
  return (
    <div className="container">
        
    <header>
    <div class="scrolling-text">
        <p>welcome to my first Website.</p>
    </div>
    </header>
     <h2>Details</h2>
        <form>
            <label for="name">First name:</label>
           <p> <input type="text" id="name" placeholder="Enter First name"/></p>
           <label for="dob">Date of Birth:</label>
           <p> <input type="date" id="dob"/></p>
            <label for="pswd"> Create Password:</label>
           <p> <input type="password" id="pswd" placeholder="Enter Password"/></p>
        
            <label for="file">Upload File:</label>
           <p> <input type="file"/></p> 
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>21A81A6110</td>
                    <td>Hemanth</td>
                    <td>AIML</td>
                    <td>AIM</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>21A81A6109</td>
                    <td>Ganesh</td>
                    <td>AIML</td>
                    <td>AIM</td>
                </tr>
               
                <tr>
                    <td>3</td>
                    <td>21A81A6108</td>
                    <td>Saketh</td>
                    <td>CS</td>
                    <td>CSE</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>21A81A6107</td>
                    <td>Susan</td>
                    <td>ECE</td>
                    <td>ECE</td>
                </tr>
            </tbody>
        </table>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <a href="#">Back</a>
    </div>
  )
}
export default Form;