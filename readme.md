MoveOutfits
===================

Github: https://github.com/codedoll/moveoutfits/
Live Demo: https://moveoutfits.herokuapp.com/

This project uses the following:
 
 -**Language**: HTML, Javascript

 -**Database** : MongoDB

 -**Server-side** : Nodejs
 
 -**Framework** : AngularJS
 
 -**Library**: jQuery, Dragula, express, 



----------

Time spent building: 6 hours

----------

**How to use**
 - Drag and drop items to desired location
 - Hit the "**save**" button. Important!!! Otherwise, the new order will **not** be saved.
 Note: The image "Mandarin Sakura Print" was mis-sized on purpose so that it can be a clear indication of reordering, for reference.

**Struggles**
 - Logic behind database query sort
 - Finding a good library for drag and drop functionality
 - The library I used was either not agreeing with my CSS styling or needs better DOM control on horizontal ordering
 - Deciding if the items should be auto-save. I decided not to auto save the items due to the possibility of clients making a mistake while dragging and dropping, and making the website much more slower due to the additional digest-loops involved
 - Publishing the live demo took 2 hours due to buildpack complications

 **Made with <3 by Lyn**