document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");
	const navbarToogler = document.querySelector(".navbar-toggler");

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	navbarToogler.addEventListener("click", () => {
		navList.classList.toggle("show");
		navList.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
		navList.style.padding = "20px";
	});

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);

	window.addEventListener("scroll", addShadow);
});
