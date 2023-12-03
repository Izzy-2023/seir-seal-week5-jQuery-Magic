
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  
$(() => {
    // Select the element with ID "container"
    const $container = $("#container");
    console.log($container)
    // Create an h1 element
    const $h1 = $("<h1>Hogwarts</h1>");
    console.log($h1)
    // Append the h1 element to the container
    $container.append($h1);
  

});

      

