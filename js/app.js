/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
//force page to scroll to top when page refreshed 
 window.onbeforeunload = function () {
        window.scrollTo(0, 0);
   };
/**
 * Define Global Variables
 * 
*/

let sections=document.querySelectorAll('section');
let nav_bar=document.querySelector('#navbar__list');

let fragment=document.createDocumentFragment();
let button=document.querySelector('#top_button');
let boundary;
let top_section;
let bottom_section;
let section_nav_data;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function remove_active_classes(target){
	for (t of target)
		t.classList.remove('your-active-class');
	}


function active_link(section_nav_data)
{

	for(link of links){

		if (link.textContent==section_nav_data)
		{
		    remove_active_classes(links);
			link.classList.add('your-active-class');

		}
	}
}

function window_scrolling(){
	if(document.documentElement.scrollTop==0)
	{
		remove_active_classes(sections);
		remove_active_classes(links);
	}
	for(section of sections)
	{
	  boundary=section.getBoundingClientRect();
	  top_section=boundary.top;
	  bottom_section=boundary.bottom;

	    if(top_section>0 && bottom_section<window.innerHeight)
	       {
		    
		     remove_active_classes(sections);
		     section.classList.add('your-active-class');
		     section_nav_data=section.getAttribute('data-nav');

		     active_link(section_nav_data);
	       }
    }

}

/**
 * End Helper Functions
 */


 
 // Begin Main Functions
 

// Build menu 
// build the nav

for (let section of sections)
{
	
	link_name=section.getAttribute('data-nav');
	let new_Li=document.createElement('li');
	let new_a=document.createElement('a');
	new_a.textContent=link_name;
	new_a.href="https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/";
	// Scroll to section on link click
	new_a.addEventListener('click', function (event){
		event.preventDefault();
		// Scroll to anchor ID using scrollTO event
		section.scrollIntoView();
		remove_active_classes(links);
		new_a.classList.add('your-active-class');
		remove_active_classes(sections);
		
		section.classList.add('your-active-class');
	});
	
	new_Li.appendChild(new_a);
	fragment.appendChild(new_Li);
}
nav_bar.appendChild(fragment);

// Set sections as active


button.addEventListener('click',function(){
	document.documentElement.scrollTop=0;});



let links=document.querySelectorAll('a');
// Begin Events
 
window.addEventListener('scroll',window_scrolling);


// Add class 'active' to section when near top of viewport

 //End Main Functions






