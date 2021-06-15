# TrayRoomba

A program that navigates an imaginary robotic hoover (much like a Roomba) through a room and cleans patches of dirt. 

## Implementation

The Room class stores the entire representation of the room, a roomba object and location of all the patches of dirt. The room 
places the roomba in the room as per the specified position by input.txt and kicks off the cleaning process. 

The Roomba class stores the roomba's position, driving instructions, roomba's boundaries and number of patches cleaned by the roomba.

Some edge cases I took in to consideration were - 
* Roomba consistently hitting the wall at the boundary in any direction. For example driving instructions - NNNNNNNNNNNNN
* Size of room is zero 
* Roomba and dirt patches are placed outside of the room

## To run the application

Clone this repository, then through the machine's shell go to the repository's 
folder.

Then make sure node has been installed. Then run the following command
from your machine's shell -  
```
node index.js
```

To change the input, simply edit the input.txt file or go to index.js and replace the parameter - 
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
computed. Here is the output for the given input text - 
<pre>
Initial Set Up Of The Room...
4|  |  |  |  |  |
3|  |  |D |  |  |
2|  |R |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the North direction to 1,3
4|  |  |  |  |  |
3|  |R |D |  |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the North direction to 1,4
4|  |R |  |  |  |
3|  |  |D |  |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the East direction to 2,4
4|  |  |R |  |  |
3|  |  |D |  |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the South direction to 2,3
Roomba cleaned a patch of dirt!
4|  |  |  |  |  |
3|  |  |R |  |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the East direction to 3,3
4|  |  |  |  |  |
3|  |  |  |R |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the East direction to 4,3
4|  |  |  |  |  |
3|  |  |  |  |R |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the South direction to 4,2
4|  |  |  |  |  |
3|  |  |  |  |  |
2|  |  |D |  |R |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the West direction to 3,2
4|  |  |  |  |  |
3|  |  |  |  |  |
2|  |  |D |R |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the North direction to 3,3
4|  |  |  |  |  |
3|  |  |  |R |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the West direction to 2,3
4|  |  |  |  |  |
3|  |  |R |  |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Moving the Roomba in the West direction to 1,3
4|  |  |  |  |  |
3|  |R |  |  |  |
2|  |  |D |  |  |
1|  |  |  |  |  |
0|  |D |  |  |  |
   0  1  2  3  4 

Final Result
1 3
1

</pre>

