document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    let resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            resize_slider_container();
        });
    });

    const header_background = VANTA.WAVES({
        el: "#header",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 100.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x012f5c,
        shininess: 20.00,
        waveHeight: 25.00,
        waveSpeed: 0.5,
        zoom: 0.65
    });

    const overlay_background = VANTA.NET({
        el: "#overlay",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xf3f3f3,
        backgroundColor: 0x004080bf,
        points: 15.00,
        maxDistance: 20.00,
        spacing: 10.00,
        showDots: false
    });

    var swiper = new Swiper(".swiper", {
        autoplay: {
            delay: 3000,
        },
        loop: true,
        grabCursor: true,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            duration: 300,
            dynamicBullets: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        updateOnWindowResize: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 400,
            depth: 200,
            modifier: 2,
            slideShadows: false,
        },
        fadeEffect: {
            crossFade: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
                effect: "fade",
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
                effect: "coverflow",
                coverflowEffect: {
                    modifier: 1,
                },
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
                effect: "coverflow",
            },
        },
    });

    function resize_slider_container() {
        let slider_container = document.getElementsByClassName("slider-container")[0];
        //let slider_container_style = window.getComputedStyle(slider_container);
        let home = document.querySelector("#home");
        let home_style = window.getComputedStyle(home);
        let slider_section_style = window.getComputedStyle(document.querySelector("#slider"));
        let width = home.clientWidth - (2 * parseInt(slider_section_style.paddingLeft));
        //let width = home.clientWidth - (2 * parseInt(slider_container_style.marginLeft));
        //console.log(width - (2 * parseInt(home_style.marginLeft)) - (2 * parseInt(slider_section_style.paddingLeft)));
        slider_container.style.width = `${width}px`;
        let root = document.querySelector(":root");
        let root_vars = getComputedStyle(root);
        //let slide_padding_max = parseInt(root_vars.getPropertyValue("--slide-padding-max"));
        let slide_padding_percent = parseInt(root_vars.getPropertyValue("--slide-padding-percent"));
        //let init_size = parseInt(root_vars.getPropertyValue("--slider-nav-button-size-max"));
        //let size = (init_size * (width * (slide_padding_percent / 100))) / slide_padding_max;
        //console.log(width * (slide_padding_percent / 100));
        root.style.setProperty("--slider-nav-button-size-percent", `${width * (slide_padding_percent / 100)}px`);
    }

    let slider = document.getElementById("slider");
    resize_slider_container();
    resizeObserver.observe(slider);
});