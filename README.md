## MODIFY your current patterns assignment to accommodate the following. Tests compulsory. Project has to be on Github.

The below examples are only with filled_rectangle and left_triangle/right_triangle. But the assignment is expected to work with all the other patterns including angled hollow diamond.

node createPattern.js filled_rectangle 20 7 left_triangle 7
<pre>
********************  *
********************  **
********************  ***
********************  ****
********************  *****
********************  ******
********************  *******

node createPattern.js left_triangle 7 filled_rectangle 20 7

*      ********************* 
**     ********************* 
***    ********************* 
****   ********************* 
*****  ********************* 
****** ********************* 

node createPattern.js flip left_triangle 7 left_triangle 7

      *      *      
     **     **     
    ***    ***    
   ****   ****   
  *****  *****  
 ****** ****** 

node createPattern.js flip left_triangle 7 right_triangle 7

      * *      
     ** **     
    *** ***    
   **** ****   
  ***** *****  
 ****** ****** 


node createPattern.js mirror right_triangle 7 left_triangle 7

****** ****** 
 ***** *****  
  **** ****   
   *** ***    
    ** **     
     * *      

</pre>
