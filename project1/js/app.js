document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully");
});


// Ps added for the Project description js 

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-modal');

const projectDetails = {
  hrms: `
    <h3>HRMS (Comunus Project - Human Resource Management System)</h3>
    <p><strong>Role:</strong> Java Developer</p>
    <p><strong>Duration:</strong> Jan 2023 - Apr 2023</p>
    <p><strong>URL:</strong> <a href="https://comunus.hrmsbuddy.com/" target="_blank">HRMS Portal</a></p>
    <p><strong>Tools:</strong> Eclipse IDE, JDK 8, MS SQL, Tomcat 8.5, GitLab</p>
    <p><strong>Skills:</strong> Java, Spring MVC, JSP, Hibernate, Git</p>
    <p>
      HRMS is a company product-based project built using microservices architecture with Spring MVC.
      The objective was to create a secure and compliant system for managing human resource functions such as employee data, leave management, and payroll.
    </p>
    <ul>
      <li>Implemented token-based authentication and end-to-end data encryption/decryption to meet data privacy regulations.</li>
      <li>Tested and debugged code to ensure high-quality and error-free software delivery.</li>
      <li>Collaborated on modules handling employee onboarding, access control, and workflow automation.</li>
    </ul>
  `,
  crm: `
    <h3>CRM Portal (Tata AIA Project)</h3>
    <p><strong>Role:</strong> Java Developer</p>
    <p><strong>Duration:</strong> May 2023 - Sep 2024</p>
    <p><strong>Tools:</strong> SVN, SOAP UI, JDK 8, REST API, XML, Oracle DB</p>
    <p><strong>Skills:</strong> Java, RESTful Web Services, XML Parsing, Version Control</p>
    <p>
      The CRM Portal was built to streamline customer relationship workflows for Tata AIA, featuring SOAP-based frontend integration with Java backend services.
    </p>
    <ul>
      <li>Worked on REST web services to transfer data from Oracle DB to XML-based SOAP UI frontend.</li>
      <li>Handled complex data fetch operations with scheduled tasks via APL.</li>
      <li>Used SVN for version control and continuous integration of modules.</li>
      <li>Conducted regular code reviews, resulting in a 30% improvement in code quality and adherence to standards.</li>
      <li>Continually adopted emerging technologies to optimize backend performance and reliability.</li>
    </ul>
  `,
  partner: `
    <h3>Partner Portal (Tata AIA Project)</h3>
    <p><strong>Role:</strong> Java Developer</p>
    <p><strong>Duration:</strong> Aug 2024 - Jan 2025</p>
    <p><strong>Tools:</strong> Spring Boot, Angular, Oracle DB, Azure Cloud, GitHub</p>
    <p><strong>Skills:</strong> Microservices, Token Authentication, Agile Methodology, CI/CD</p>
    <p>
      Partner Portal is a high-availability, customer-facing application for partner onboarding and secure document processing.
    </p>
    <ul>
      <li>Collaborated in a cross-functional Agile team of 8+ engineers, improving project efficiency by 20%.</li>
      <li>Utilized Oracle DB and header token authentication to enhance security.</li>
      <li>Designed a scalable microservices backend with Spring Boot and Angular frontend, reducing response times by 40%.</li>
      <li>Implemented GitHub and Azure Cloud for fast, documented, and time-efficient deployments.</li>
    </ul>
  `,
  tvg: `
    <h3>TVG (Tata Voluntary Group)</h3>
    <p><strong>Role:</strong> Java Developer</p>
    <p><strong>Duration:</strong> Jan 2025 – May 2024</p>
    <p><strong>URL:</strong> <a href="https://grip.tataaia.com/TVG/" target="_blank">TVG Portal</a></p>
    <p><strong>Tools:</strong> Eclipse IDE, JDK 8, SQL Server, Tomcat 8.5, GitLab</p>
    <p><strong>Skills:</strong> Java, Spring MVC, Spring Boot, JSP, Hibernate, Git, Ajax, JavaScript, Bootstrap</p>
    <p>
      TVG is a Tata AIA initiative enabling users to submit insurance policy-related forms. It includes features like claims processing, document upload/download, personal details management, and fund switching.
    </p>
    <ul>
      <li>Developed, tested, and maintained scalable Java applications using Spring Boot and Hibernate.</li>
      <li>Created RESTful APIs for effective data communication between frontend and backend systems.</li>
      <li>Connected to SQL Server through stored procedures to serve data to RESTful services.</li>
      <li>Used GitLab for version control and clean project structure.</li>
      <li>Applied front-end enhancements using Bootstrap, JavaScript, and Ajax to improve usability.</li>
      <li>Collaborated with team members during daily standups and UAT evaluations.</li>
      <li>Quickly identified and resolved production issues within tight deadlines.</li>
    </ul>
  `,
  custom: `
    <h3>Custom Client Tool</h3>
    <p>Built a niche tool for client-side automation. Modular, scalable, and secured with OAuth2 authentication.</p>
  `
};

let currentOpenId = null; // Track which card is currently open

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');

    // If the same card is clicked again, close the modal
    if (id === currentOpenId) {
      modal.classList.add('hidden');
      card.classList.remove('active');
      currentOpenId = null;
    } else {
      // Update modal content
      modalContent.innerHTML = projectDetails[id];
      modal.classList.remove('hidden');

      // Reset all card styles
      document.querySelectorAll('.project-card').forEach(c => {
        c.classList.remove('active');
      });

      // Highlight the clicked card
      card.classList.add('active');

      // Set current open ID
      currentOpenId = id;
    }
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.querySelectorAll('.project-card').forEach(c => {
    c.classList.remove('active');
  });
  currentOpenId = null; // Reset open ID when modal is closed manually
});




  function showToast(message, isSuccess = true) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    toastMsg.textContent = message;
    toast.classList.remove('hidden');

    // Set background based on success or error
    toast.style.backgroundColor = isSuccess ? '#ccffcc' : '#ffd6d6'; // light green / light red
    toast.style.color = '#111'; // black text

    // Auto-hide after 4 seconds
    setTimeout(() => {
      hideToast();
    }, 4000);
  }

  function hideToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('hidden');
  }