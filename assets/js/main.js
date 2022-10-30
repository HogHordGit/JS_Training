
    let container = 0;
    let indicator = null;

    function createContainer() {
        const main = document.createElement("div");
        const body = document.querySelector("body");

        main.classList.add("carousel");
        main.setAttribute("id", "carousel");

        body.insertBefore(main, body.firstChild);

        container = document.querySelector("#carousel");
    }

    function createSlides(n) {
        const slidesContainer = document.createElement("ul");
        slidesContainer.classList.add("slides");

        for (let i = 0; i < n; i++) {
            const slide = document.createElement("li");
            const a = document.createElement("a");

            slide.classList.add("slides__item");
            if (i == 0) slide.classList.add("active");

            a.setAttribute("href", "#");

            slidesContainer.append(slide);
            slide.append(a);
        }

        container.append(slidesContainer);
    }

    function createIndicators(n) {
        const indicatContainer = document.createElement("div");
        indicatContainer.classList.add("indicators");

        for (let i = 0; i < n; i++) {
            const el = document.createElement("span");

            el.classList.add("indicators__item");
            if (i == 0) el.classList.add("active");

            el.setAttribute("data-slide-to", i);

            indicatContainer.append(el);
        }

        container.append(indicatContainer);
    }

    function createControls() {
        const arrCtr = ["prev", "next", "pause"];
        const arrI = ["-chevron-left", "-chevron-right", "-play"];
        const contrContainer = document.createElement("div");

        contrContainer.classList.add("controls");
        
        for (let i = 0; i < arrCtr.length; i++) {
            const controller = document.createElement("div");
            const elI = document.createElement("i");

            controller.classList.add("controls__item");
            controller.classList.add(`controls__${arrCtr[i]}`);
            
            elI.classList.add("fas");
            elI.classList.add(`fa${arrI[i]}`);

            contrContainer.append(controller);
            controller.append(elI);
        }

        container.append(contrContainer);
    }

    function createStyles() {
        styleContainer = document.createElement("style");

        styleContainer.innerHTML = `
            .controls,
            .slides {
                position: relative;
            }
            .indicators {
                position: relative;
                display: flex;
            }
            .indicators__item {
                display: block;
                width: 20px;
                height: 20px;
                background-color: green;
                margin: 5px;
              }
        `;

        container.append(styleContainer);
    }

    function indicatorListener(event) {
        let target = event.target;
      
        if (target.classList.contains("indicators__item")) {
            target.style.backgroundColor = "red";
        
            if (indicator !== null) {
                indicator.removeAttribute("style");
            }
        
            indicator = target;
        }
    }
      
    function setListener() {
        let indicatorsContainer = document.querySelector(".indicators");
        
        indicatorsContainer.addEventListener("click", indicatorListener);
    }

function createCarousel(slidesCount) {
    //createContainer();
    container = document.querySelector('#carousel');
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createStyles();
    setListener();
}

createCarousel(5);



