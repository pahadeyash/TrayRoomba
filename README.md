# TrayRoomba

A program that navigates an imaginary robotic hoover (much like a Roomba) through a room and cleans patches of dirt. 

## Implementation

The Room class stores the entire representation of the room and keeps track of the 
position of the hoover and patches of dirt. 

## To run the application

Clone this repository, then through the machine's shell go to the repository's 
folder.

Then make sure node has been installed. Then run the following command
from your machine's shell -  
```
node index.js
```

To change the imput, simply edit the input.txt file or go to index.js and replace the paramter - 
```
main('./input.txt');
```
with another text file. 
## Output

The program will output the final position of the hoover and the 
number of patches of dirt that have been cleaned, as per the
requirments. 

In addition, I've also printed out the state of the board after every 
move so its easier to visualize how the final result is being 
computed
