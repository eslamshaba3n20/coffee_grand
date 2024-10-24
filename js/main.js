let toggleMenu = document.querySelector(".toggle-menu");
let navBar = document.querySelector(".nav-bar");
let links = document.querySelector(".links");


toggleMenu.onclick = function() {
    navBar.classList.toggle("opend");
    links.classList.toggle("opend");
}


// //nav bar links active
// let linksA = document.querySelectorAll(".links li ");
// console.log(linksA);
// linksA.forEach(a => {
//     a.addEventListener("clicck", function() {
//         console.log(a.parentElement);
//     })
// });



// over lay galary section and pupgallery
let imgs = document.querySelectorAll(".gallery .image-box .image img");
let overLay = document.querySelector(".overlay-gallery");
let iconBox = document.querySelectorAll(".icon-box");
iconBox.forEach(icon => {

    icon.addEventListener("click", () => {
        // open the overlay class 
        overLay.classList.add("opend");

        // catch the img to get src of it
        let imgOrgenal = icon.parentElement.querySelector("img");


        //create popuo box
        let popupBox = document.createElement("div");
        let img = document.createElement("img");
        popupBox.className = "pop-box";
        img.className = "img-pop";
        img.src = imgOrgenal.src;

        popupBox.appendChild(img);
        overLay.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);
    })

    // Close Popup
    document.addEventListener("click", function(e) {

        if (e.target.className == 'close-button') {

            // Remove The Current Popup
            e.target.parentNode.remove();

            // Remove Overlay
            //    .remove("opend");
            overLay.classList.remove("opend");
            // console.log(document.querySelector(".overlay-gallery.opend").classList);

        }

    });
})