//self executing function here
(function() {
    // your page initialization code here
    // the DOM will be avaiable here

    // Get the modal
    var modal = document.getElementById('modal');

    // Get the modal image
    var img = document.getElementById("modal-img");

    // Get the button that opens the modal
    var btn = document.getElementsByClassName("img__stretch");

    // Get the <span> element that closes the modal
    var close = document.getElementsByClassName("close")[0];

    var body = document.getElementsByTagName("body")[0];

    // Applying event inside an array for all elements
    for (var index = 0; index < btn.length; index++) {

        // When the user clicks on the button, open the modal
        btn[index].onclick = function() {
            var img_src = this.dataset.img;

            modal.style.display = "block";
            body.classList.add("modal-is-open");
            img.src = img_src;
        }
    }

    function closeModal() {
        modal.classList.add("closing");
        window.setTimeout(function(){
            modal.style.display = "none";
            modal.classList.remove("closing");
            body.classList.remove("modal-is-open");
        }, 400);
    }

    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
        closeModal();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Closes modal with ESC
    window.onkeyup = function (event) {
        if (event.keyCode == 27) {
            closeModal();
        }
     }
})()