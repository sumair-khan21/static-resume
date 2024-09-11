var experienceSection = document.querySelector('.experience');
// Experience data
var jobData = [
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
jobData.forEach(function (job) {
    var jobElement = document.createElement('div');
    jobElement.classList.add('job');
    jobElement.innerHTML = "\n        <h3>".concat(job.title, " at ").concat(job.company, "</h3>\n        <p>").concat(job.duration, "</p>\n        <p>").concat(job.description, "</p>\n    ");
    experienceSection === null || experienceSection === void 0 ? void 0 : experienceSection.appendChild(jobElement);
});
