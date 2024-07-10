const targets = document.querySelectorAll(".js-show-on-scroll");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((ent) => {
        if (ent.isIntersecting) {
            ent.target.classList.add("fadeIn")
            ent.target.classList.remove("opacity-0");
        } else {
            ent.target.classList.remove("fadeIn")
            ent.target.classList.add("opacity-0");

        }
    })
})

targets.forEach((el) => {
    el.classList.add("opacity-0");
    observer.observe(el);
});

