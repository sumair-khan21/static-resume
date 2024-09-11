const experienceSection = document.querySelector('.experience');

// Experience data
const jobData = [
    {
        title: "FrontEnd Developer",
        company: "JassStar International",
        duration: "Jan 2023 - Present",
        description: "Created responsive web apps, improved user interfaces, and optimised performance"
    },
    {
        title: "Digital Marketing",
        company: "JassStar International",
        duration: "May 2022 - Now",
        description: "Developed and implemented basic digital marketing campaigns to increase online visibility.Managed social media accounts to engage with audiences and boost brand presence."
    }
];


jobData.forEach(job => {
    const jobElement = document.createElement('div');
    jobElement.classList.add('job');
    jobElement.innerHTML = `
        <h3>${job.title} at ${job.company}</h3>
        <p>${job.duration}</p>
        <p>${job.description}</p>
    `;
    experienceSection?.appendChild(jobElement);
});
