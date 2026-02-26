window.addEventListener("DOMContentLoaded", () => {
	const observer = (elementsArray) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
					observer.unobserve(entry);
				}
			});
		}, {});

		elementsArray.forEach((element) => observer.observe(element));
	};

	const firstBadge = document.querySelector(".timeline-background .badge-1");
	const lastBadge = document.querySelector(".timeline-background .badge-2");
	observer([firstBadge, lastBadge]);
});
