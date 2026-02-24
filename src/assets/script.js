/* =========================================================
    DOM ELEMENTS
========================================================= */

// Counters
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const [filterAllBtn, filterPendingBtn, filterInterviewBtn, filerRejectedBtn] = filterButtons;

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


/* =========================================================
   COUNTER UPDATE
========================================================= */

function updateCounters() {
    jobCards = document.querySelectorAll("article[data-status]");

    let interview = 0;
    let rejected = 0;

    jobCards.forEach(card => {
        if (card.dataset.status === "interview") interview++;
        if (card.dataset.status === "rejected") rejected++;
    });

    totalCount.innerText = jobCards.length;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
}


/* =========================================================
   JOB CARD LOGIC
========================================================= */

function attachCardLogic(card) {
    const interviewBtn = card.querySelector(".border-green-500");
    const rejectedBtn = card.querySelector(".border-red-500");
    const deleteBtn = card.querySelector(".fa-trash").parentElement;
    const badge = card.querySelector("span");

    interviewBtn.addEventListener("click", () => {
        card.dataset.status = "interview";
        badge.innerText = "Interview";
        badge.className = "inline-block px-4 py-1 rounded-full bd-green-100 text-green-700 font-semibold text-sm";
        updateCounters();
    });

    rejectedBtn.addEventListener("click", () => {
        card.dataset.status = "rejected";
        badge.innerText = "Rejected";
        badge.className = "inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold-sm";
        updateCounters();
    });

    deleteBtn.addEventListener("click", () => {
        card.remove();
        updateCounters();
    });
}
