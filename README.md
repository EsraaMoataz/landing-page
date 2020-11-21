Objective:
----------
   ->This project requires you to build a multi-section landing page, with a dynamically updating navigational menu based on the amount 
     of content that is added to the page.
     
   ->This project serves two purposes:
   
        1)To prepare you for appending dynamically added data to the DOM.
        2)To show you how javascript can improve the usability of an otherwise static site.

Project files:
--------------
   ->index.html
   
   ->styles.css
   
   ->app.js
   
Steps taken to build the landing page:
-------------------------------------
1) Add aditional section in html file to have at least four sections in the page.

    -> using the section tag to add a new section in the html file and set it's "nav_data" attribute to "section 4" .

2) Build the navigation menu dynamically accroding to number of sections that exist in the page.

    ->Using .querySelectorAll() function to select all sections by tag name
    
    ->Using for..of loop to iterate through all the sections
    
    ->inside the loop:
    
      1)create:
    
         1. list "li"
         
         2. link "a"
         
         3. textcontent to the link
         
    2)Add event listner to the link that when the link is clicked ,it scrolls into the corresponding section and also add "your-active-class" active class to this 
    section and that link.
       

3) Add scroll into section functionality to the links in the navigation menu.

4) When the section in the viewport ,this section is heiglighted and also the link corresponding to it.

5) Add a scroll to top button.



