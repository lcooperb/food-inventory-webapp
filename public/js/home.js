// Add event listener to remove button
const container = document.querySelector(".container");
const add = document.querySelector(".add");
const cancel = document.querySelector(".CancelButton");
const ok = document.querySelector(".OkButton");

container.addEventListener('click', function(event) {

	// Don't follow the link
	event.preventDefault();

  var clickClass = event.target.getAttribute("class");
  if (clickClass != null) {
    console.log("class = " + clickClass);

    if (clickClass.includes("remove")) {

      var targetId = event.target.id;

      if (targetId == null) {
        console.log("targetId was null: " + event.target);
        //targetId = event.target.
      } else {
        console.log("remove was found with id: " + targetId);


        var removeSquare = document.getElementById(targetId);

        console.log(removeSquare);

        removeSquare.remove();
      }


    }

    // Log the clicked element in the console
    console.log(event.target);
  }

  event.stopPropagation();

}, false);

add.addEventListener('click', function(event){
	event.preventDefault();
	var addBox = document.querySelector("#addForm");
	addBox.classList.remove("hidden");

}, false);

cancel.addEventListener('click', function(event){
	event.preventDefault();
	var addBox = document.querySelector("#addForm");
	addBox.classList.add("hidden");
},false);

ok.addEventListener('click', function(event){
	event.preventDefault();
},false);
