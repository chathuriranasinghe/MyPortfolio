var typed = new Typed("#text", {
    strings: ["Frontend Developer", "Backend Developer", "Mobile App Developer"], // `strings` should be lowercase
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

function startProgress(element, endValue, speed) {
    let progressStartValue = 0;
    let progressValue = element.querySelector(".progress-value");
    let circularProgress = element;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#0ef ${progressStartValue * 3.6}deg, #000000 0deg)`;

        if (progressStartValue == endValue) {
            clearInterval(progress);
        }
    }, speed);
}

let progressBars = document.querySelectorAll(".circular-progress");

startProgress(progressBars[0], 90, 10);  
startProgress(progressBars[1], 80, 10);  
startProgress(progressBars[2], 75, 10);  
startProgress(progressBars[3], 85, 10);  