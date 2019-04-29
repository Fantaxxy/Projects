var lis = document.querySelectorAll("li"); 
// query selector only give you what you select ie we only selected the first li
// when we use querySelectorAll we will select all of the li's


for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function () {
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function () {
       this.classList.toggle("done");
    });
}


