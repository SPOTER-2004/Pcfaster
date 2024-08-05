// slider

const slides = document.querySelectorAll(".slides img");
const zoomImage = document.querySelector(".zoom-image");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  slides[slideIndex]?.classList.add("displaySlide");
}

function showSlides(index) {

  slideIndex = index >= slides.length ? 0:index < 0 ? slides.length - 1 : index;

  slides.forEach((slide) => slide.classList.remove("displaySlide"));
  slides[slideIndex].classList.add("displaySlide");
}

function next() {
  slideIndex++;
  showSlides(slideIndex);
}

function prev() {
  slideIndex--;
  showSlides(slideIndex);
}

const firstImages = document.querySelectorAll(".first-image");

// Zoom-effect
firstImages.forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    let rect = image.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let zoomFactor = 2;
    let xPercent = (x / image.offsetWidth) * 150;
    let yPercent = (y / image.offsetHeight) * 150;
    let bgPosX = (xPercent - 50) * zoomFactor + "%";
    let bgPosY = (yPercent - 50) * zoomFactor + "%";

    zoomImage.style.display = "block";
    zoomImage.style.backgroundImage = `url(${image.src})`;
    zoomImage.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
  });

  image.addEventListener("mouseleave", () => {
    zoomImage.style.display = "none";
  });
});

//Tabs//

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContent.forEach((content) => content.classList.remove("active"));
    target.classList.add("active");
  });
});

// .............................................

// script.js
function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.classList.remove("active");
    setTimeout(() => {
      content.style.display = "none";
    }, 500);
  });

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const activeContent = document.getElementById(tabId);
  activeContent.style.display = "block";
  activeContent.classList.add("active");

  event.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tab").click();
});

// For user Bencmark
var ctx = document.getElementById("mychart").getContext("2d");

var chartOptions = {
  type: "bar",
  data: {
    labels: [
      "Red Dead2",
      "PUBG",
      "Gta V",
      "WarZone",
      "Fortnite",
      "Apex Legend",
      "CypberPunk 2077",
      "Rainbox Six",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [0, 100, 200, 300, 400, 500, 600, 700],
        backgroundColor: [
          "#198754",
          "#198754",
          "#198754",
          "#198754",
          "#198754",
          "#198754",
          "#198754",
          "#198754",
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        max: 700,
      },
      y: {
        ticks: {
          display: true,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: function (context) {
          return window.innerWidth < 700;
        },
        color: "black",
        align: "end",
        anchor: "end",
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  },
  plugins: [ChartDataLabels],
};

var myChart = new Chart(ctx, chartOptions);

function updateChart(level) {
  var data;
  if (level === "low") {
    data = [193, 260, 235, 200, 439, 300, 110, 666];
  } else if (level === "medium") {
    data = [170, 250, 200, 183, 287, 290, 106, 607];
  } else if (level === "high") {
    data = [158, 235, 175, 178, 240, 270, 85, 539];
  }
  myChart.data.datasets[0].data = data;
  myChart.update();
  document.getElementById("low").classList.remove("active-tab");
  document.getElementById("medium").classList.remove("active-tab");
  document.getElementById("high").classList.remove("active-tab");

  document.getElementById(level).classList.add("active-tab");
}

function handleResize() {
  var width = window.innerWidth;
  if (width < 700) {
    myChart.options.plugins.datalabels.display = true;
    myChart.options.scales.y.ticks.display = false;
  } else {
    myChart.options.plugins.datalabels.display = false;
    myChart.options.scales.y.ticks.display = true;
  }
  myChart.update();
}

window.addEventListener("resize", handleResize);

updateChart("low");
handleResize();
