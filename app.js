
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  
// $(() => {
//     // Select the element with ID "container"
//     const $container = $("#container");
//     console.log($container)
//     // Create an h1 element
//     const $h1 = $("<h1>Hogwarts</h1>");
//     console.log($h1)
//     // Append the h1 element to the container
//     $container.append($h1);
// });

// $(() => {
//     // Select the element with ID "container"
//     const $container = $("#container");
// 	// Create an h2 element
//     const $h2 = $("<h2>Izzy</h2>");
//     // Append the h2 element to the container
//     $container.append($h2);
// });

// $(() => {
//     // Select the element with ID "container"
//     const $container = $("#container");
//     // Create an h3 element 
//     const $h3 = $("<h3>Ravenclaw</h3>")
//     // Append the h3 element to the container
//     $container.append($h3);
// })


// $(() => {
//     // Select the element with the ID container
//     const $container = $("#container");
//     // Create an h4 element
//     const $h4 = $("<h4>dragon</h4>");
//     // Add a class to the h4 element
//     $h4.addClass("cat")
//     // Append the h4 element to the container
//     $container.append($h4);
// })

// $(() => {
//     // Select the element with ID container
//     const $container = $("#container");
//     // Create h5 element
//     const $h5 = $("<h5>Hornbeam Wand with Dragon Heartstring</h5>");
//     console.log($h5)
//     // Append the h5 element to the container
//     $container.append($h5);

// })


  $(document).ready(function() {
    // Break your wand! (select the element that contains your wand and remove it)
    $(".wand").remove();

    // Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
    $("ul[storage='trunk'] li:contains('Butter beer')").remove();

    // Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
    var newWand = $("<h4>").addClass("wand").text("Elder Wand with Thestral Tail Hair Core");
    $(".pet").after(newWand);

    // Make your new wand stand out by adding a color of indigo (or any color you like)
    $(".wand").css("color", "indigo");

    // Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML)
    var petElement = $(".cat").detach();
    $(".pet-accessory").after(petElement);

    // Have your pet come back (remove your pet from the DOM, put it back in its original location)
    $(".pet-accessory").after(petElement);
  });



  
      

