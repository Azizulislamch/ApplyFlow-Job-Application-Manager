/* =========================================================
    DOM ELEMENTS
========================================================= */

// Counters
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

// Filter Buttons
const filterAllBtn = document.querySelector("button:nth-child(1)");
const filterInterviewBtn = document.querySelector("button:nth-child(2)");
const filterRejectedBtn = document.querySelector("button:nth-child(3)");
const filterButtons = document.querySelectorAll(".filter-btn");

// Job Form
const jobForm = document.getElementById("job-form");
const companyInput = document.getElementById("company-input");
const titleInput = document.getElementById("title-input");
const locationInput = document.getElementById("location =input");
const typeInput = document.getElementById("type-input");
const slaryInput = document.getElementById("salary-input");
const descInput = document.getElementById("desc-input");

// Job List
const jobList = document.querySelector("main");
let jobCards = document.querySelectorAll("article[data-status]");