let hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click", function() {
		this.classList.toggle("open");
		this.classList.remove("nothing");
});