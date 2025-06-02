document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully");
});


// Ps added for the Project description js 

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-modal');

const projectDetails = {
  hrms: `
    <h3>HRMS (Human Resource Management System)</h3>
    <p>An internal system to manage leaves, appraisals, and resignations. Includes employee workflows and admin dashboards.</p>
  `,
  crm: `
    <h3>CRM Portal (Customer Relationship Management)</h3>
    <p>Integrated backend support for Tata AIA's CRM platform. Involves APIs, role management, and performance dashboards.</p>
    `,
    partner: `
      <h3>Partner Portal</h3>
      <p>Developed a secure portal for partner onboarding and document verification. Includes custom middleware and user tracking.</p>
    `,
  tvg: `
    <h3>TVG - Policy Tracking</h3>
    <p>Built using Spring Boot and Angular, deployed on Azure. Handles real-time updates on insurance policies.</p>
  `,
  custom: `
    <h3>Custom Client Tool</h3>
    <p>Built a niche tool for client-side automation. Modular, scalable, and secured with OAuth2 authentication.</p>
  `
};

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');

    // Update modal content
    modalContent.innerHTML = projectDetails[id];
    modal.classList.remove('hidden');

    // Reset all card styles
    document.querySelectorAll('.project-card').forEach(c => {
      c.classList.remove('active');
    });

    // Highlight the clicked card
    card.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.querySelectorAll('.project-card').forEach(c => {
    c.classList.remove('active');
  });
});

