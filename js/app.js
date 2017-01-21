//Problem: User goes to dead end when clicking on image
//Solution: Create an overlay with the large image (lightbox)


var $overlay = $('<div id="overlay"></div>'); // var that contains overlay div (edited in CSS)
var $image = $("<img>"); // var that contains an image
var $caption = $("<p></p>");

// ADD IMAGE TO OVERLAY
$overlay.append($image); 

// ADD CAPTION TO OVERLAY (after image)
$overlay.append($caption); 

// ADD OVERLAY TO BODY
&("body").append($overlay); 
  
  
// CAPTURE CLICK EVENT ON A LINK TO AN IMAGE
$("#imageGallery a").click(function( event ) {  
      event.preventDefault(); // prevents browser from following link and opening in new page
      var imageLocation = &(this).attr("href"); // attribute of the specific 'a' / anchor we clicked on - image location of link we clicked on
      
      // UPDATE OVERLAY WITH IMAGE LINKED IN THE LINK 
      $image.attr("src", imageLocation); // update src to be the image location / link of image
      
      // SHOWS THE OVERLAY WITH IMAGE
      $overlay.show(); 
      
      // GET CHILD'S alt ATTRIBUTE AND SET CAPTION
       var captionText = $(this).children("img").attr("alt");
       $caption.text(captionText);
});  
  

// WHEN OVERLAY IS CLICKED:
$overlay.click(function() {

  // HIDE THE OVERLAY
  $overlay.hide();
});

