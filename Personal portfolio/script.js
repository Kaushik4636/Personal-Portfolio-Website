// Dynamically add project cards to the portfolio
const projects = [
    {
        name: "E-Commerce Product Page",
        description: "A simple e-commerce product page with add-to-cart functionality.",
        link: "https://github.com/Kaushik4636/E-commerce-product-page",
    },
    {
        name: "Weather App",
        description: "A weather application that provides real-time weather data and forecasts.",
        link: "https://github.com/Kaushik4636/Weather-App",
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills and projects.",
        link: "https://github.com/Kaushik4636/Portfolio",
    },
];

const projectList = document.getElementById("project-list");

projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectCard);
});
