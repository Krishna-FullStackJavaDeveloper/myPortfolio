//project page
const projects = [
    {
        title: "StrongPass Generator",
        details: [
            "Developed a full-stack secure password generator supporting real-time customizable options (letters per word, number of words, symbols, numbers, capitalization).",
            "Built frontend with React (TypeScript) and Material UI, backend with Spring Boot, communicating via REST APIs.",
            "Implemented Dockerized deployment for both frontend and backend using docker-compose.",
            "Configured CORS, global response formatting, and centralized exception handling for robust API communication.",
            "Applied TDD with JUnit 5 and REST Assured to ensure reliability of password generation logic.",
            "Designed a responsive, user-friendly UI with clear error handling for secure and easy usage."
        ],
        techStack: "Java, Spring Boot, React (TypeScript), Material UI, Docker, GitHub",
        media: {
        images: [
            "assets/media/strongpass/StrongPass Generator – Real-time secure password customization.png",
            "assets/media/strongpass/Secure password generated instantly based on user preferences.png",
            "assets/media/strongpass/Dockerized full-stack setup using Docker Compose.png",
            "assets/media/strongpass/Generated Password Output.png",
        ],
        // video: "assets/media/strongpass/StrongPass Generator - Web App.mp4"
        video: "https://www.youtube.com/embed/9lGFqyc9Uj4"

    }
    },
    {
        title: "BudgetIQ",
        details: [
            "Developed a personal finance web app for 100+ users to manage income, expenses, and savings goals.",
            "Automated recurring transactions and smart scheduling, reducing manual input by 50%.",
            "Implemented a Goal Tracker to help users plan and monitor financial objectives.",
            "Optimized backend and API performance with multithreading, service logic optimization, and garbage collection tuning, achieving 30% faster data retrieval.",
            "Enhanced maintainability with global response formatting and centralized exception handling, improving code reuse by 40%.",
            "Built a modular, responsive UI using React and Material UI, improving interaction efficiency by 25%.",
            "Implemented secure authentication with OAuth2, JWT, role-based access control, and 2FA.",
            "Applied JUnit 5, Mockito, Testcontainers, REST Assured, and JaCoCo for robust unit and integration testing.",
            "Containerized the application with Docker for streamlined deployment."
        ],
        techStack: "Java, Spring Boot, React (TypeScript), JWT, OAuth2, MySQL, Material UI, Docker, GitHub, JaCoCo"
    },
    {
        title: "Tea Board",
        details: [
            "Led development of 5+ major modules using React Function Components and Material UI, improving UI efficiency by 25%.",
            "Built scalable RESTful APIs with Spring Boot, increasing data processing speed by 30%.",
            "Facilitated knowledge-sharing by conducting 3+ team sessions on ReactJS best practices, improving code consistency."
        ],
        techStack: "Java 17, Spring Boot, ReactJS, MS SQL, RESTful Swagger API, GitHub, Docker Compose, Microservices."
    },
    {
        title: "NPD Web App",
        details: [
            "Engineered and integrated 10+ Swagger-documented RESTful APIs, reducing backend response errors by 40%.",
            "Leveraged React Query for effective data fetching and reduced redundant API calls by 35%.",
            "Designed dynamic data tables to visualize parsed JSON, enhancing usability for 100+ admin users."
        ],
        techStack: "Java 17, JPA, Spring Boot, ReactJS, PostgreSQL, RESTful API, SVN, GitHub, Microservices, Docker Compose."
    },
    {
        title: "Gail",
        details: [
            "Led the development of a comprehensive auction and tender portal serving 1,000+ users daily.",
            "Achieved 98% unit test coverage across modules, ensuring code reliability and fewer production bugs.",
            "Provided hands-on support to 6+ team members, improving issue resolution time by 40%."
        ],
        techStack: "Java, Spring MVC, JPA, Servlet, jQuery, JavaScript, MsSQL, SVN."
    },
    {
        title: "E-Signer",
        details: [
            "Developed a secure web app for managing 500+ legal documents daily using Spring Boot and React.",
            "Designed and implemented 12+ RESTful APIs, reducing data transfer time by 25%.",
            "Integrated frontend with React (Formik, Router), improving form submission success rate by 20%."
        ],
        techStack: "Java Spring Boot, ReactJS (Material UI, React Router, Formik), MsSQL, RESTful API, SVN."
    },
    {
        title: "IMS (Insurance Management System)",
        description: [
            "Developed backend APIs and Angular frontend, enabling 200+ agents to manage policy data in real-time.",
            "Employed test-driven development (TDD) using JUnit, reducing bugs by 35% across modules.",
            "Adopted Agile methodology with 100% sprint completion across multiple iterations."
        ],
        techStack: "Java Spring Boot, Angular 10, MySQL, RESTful Swagger API, JUnit, BitBucket, JIRA."
    },
    {
        title: "ELD PinPoint Driver Tracker",
        description: [
            "Implemented real-time vehicle tracking using WebSockets, improving accuracy of delivery ETA by 40%.",
            "Optimized SQL queries in PostgreSQL to reduce load time by 30% for fleet overview dashboard.",
            "Followed Agile practices and collaborated with 3+ teams to ensure feature delivery on schedule."
        ],
        techStack: "Java Spring Boot, Angular 10, MySQL, RESTful Swagger API, BitBucket, JIRA, JWT."
    },
    {
        title: "Art Asylum (Design It Your Way)",
        description: [
            "Developed an e-commerce-style platform for artists to showcase and sell artwork, supporting 100+ listings.",
            "Enabled custom canvas tool integration, increasing average session duration by 20%."
        ],
        techStack: "Java 8, JSP, Servlet, third-party framework for online canvas."
    }
];


let currentPage = 1;
const itemsPerPage = 2;

function displayProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";
    
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let paginatedProjects = projects.slice(startIndex, endIndex);
    
    paginatedProjects.forEach(project => {
        let projectItem = document.createElement("div");
        projectItem.classList.add("projects-item");
        
       projectItem.innerHTML = `
    <div class="left-content">
        <h2>${project.title}</h2>
    </div>
    <div class="right-content">
        <ul>${(project.details || project.description || []).map(detail => `<li>${detail}</li>`).join('')}</ul>
        <p><strong>Tech Stack:</strong> ${project.techStack}</p>

        ${project.media ? `
            <a href="#" class="media-link" onclick="openMediaModal(${projects.indexOf(project)})">
                📸 View Media
            </a>
        ` : ""}
    </div>
`;
        
        container.appendChild(projectItem);
    });

    document.getElementById("pageNumber").innerText = currentPage;
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProjects();
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(projects.length / itemsPerPage)) {
        currentPage++;
        displayProjects();
    }
});

displayProjects();

let currentMediaIndex = 0;
let currentProjectMedia = [];

function openMediaModal(index) {
    const modal = document.getElementById("mediaModal");
    const container = document.getElementById("mediaContainer");

    if (!modal || !container) return;

    const media = projects[index].media;
    if (!media) return;

    // Combine video and images into one array
    currentProjectMedia = [];
    
    
    media.images.forEach(img => currentProjectMedia.push({ type: "image", src: img }));
    if (media.video) currentProjectMedia.push({ type: "video", src: media.video });

    currentMediaIndex = 0;
    showMedia();

    modal.style.display = "block";
}

function showMedia() {
    const container = document.getElementById("mediaContainer");
    const mediaItem = currentProjectMedia[currentMediaIndex];

    if (!mediaItem) return;

    if (mediaItem.type === "video") {
        // If YouTube embed link
       if (mediaItem.type === "video") {
    if (mediaItem.src.includes("youtube.com/embed")) {
        // Fallback: thumbnail + link
        container.innerHTML = `
            <a href="https://www.youtube.com/watch?v=9lGFqyc9Uj4" target="_blank" style="color:white; font-size:20px; text-decoration:none;">
                ▶ Watch Video on YouTube
            </a>
        `;
    } else {
        container.innerHTML = `
            <video controls autoplay style="max-width:95%; max-height:95%;">
                <source src="${mediaItem.src}" type="video/mp4">
            </video>
        `;
    }
}
    } else {
        // Image
        container.innerHTML = `<img src="${mediaItem.src}" alt="Project Screenshot">`;
    }
}

function nextMedia() {
    currentMediaIndex = (currentMediaIndex + 1) % currentProjectMedia.length;
    showMedia();
}

function prevMedia() {
    currentMediaIndex = (currentMediaIndex - 1 + currentProjectMedia.length) % currentProjectMedia.length;
    showMedia();
}

function closeMediaModal() {
    const modal = document.getElementById("mediaModal");
    modal.style.display = "none";
    currentProjectMedia = [];
}

// Staggered animation function
function staggeredAnimation() {
    const items = document.querySelectorAll('.experience-item'); // Select all experience items
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Set a staggered delay for each item
        item.classList.add('fade-inside'); // Add the class to trigger the fade-in animation
    });
}

window.addEventListener("click", (e) => {
    const modal = document.getElementById("mediaModal");
    if (e.target === modal) closeMediaModal();
});

// Trigger the staggered animation on page load
window.addEventListener('load', staggeredAnimation);
