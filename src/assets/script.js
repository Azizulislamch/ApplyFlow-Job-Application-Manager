/* =========================================================
    DOM ELEMENTS
========================================================= */

// Counters
const totalCount = document.getElementById("total-count");
const pendingCount = document.getElementById("pending-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const [filterAllBtn, filterPendingBtn, filterInterviewBtn, filterRejectedBtn] = filterButtons;

// Job Form
const jobForm = document.getElementById("job-form");
const companyInput = document.getElementById("company-input");
const titleInput = document.getElementById("title-input");
const locationInput = document.getElementById("location =input");
const typeInput = document.getElementById("type-input");
const salaryInput = document.getElementById("salary-input");
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
        badge.className = "inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm";
        updateCounters();
    });

    deleteBtn.addEventListener("click", () => {
        card.remove();
        updateCounters();
    });
}


/* =========================================================
   CREATE NEW JOB CARD
========================================================= */

function createJobCard(company, title, location, type, salary, desc) {

    article.className = "bg-white rounded-xl shadow-md p-6 flex justify-between gap-6 transition hover:shadow-lg";
    article.dataset.status = "pending";

    article.innerHTML = `
        <div class="space-y-3">
            <h2 class="text-2xl font-bold text-sky-900">${company}</h2>
            <p class="text-gray-500 text-lg">${title}</p>
            <ul class="flex flex-wrap gap-3 text-sm text-gray-400">
                <li>${location}</li>
                <li>${type}</li>
                <li>${salary}</li>
            </ul>

            <span class="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">Pending</span>

            <p class="text-gray-500">${desc}</p>

            <div class="flex flex-wrap gap-4 mt-3">
                <button class="px-4 py-2 rounded-xl border border-green-500 text-green-500 font-medium hover:bg-green-500 hover:text-white">Interview</button>
                <button class="px-4 py-2 rounded-xl border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white">Rejected</button>
            </div>
        </div>
        <div>
            <button class="p-3 rounded-full border border-gray-300 text-gray-400 hover:bg-red-50 hover:text-red-500 transition">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
    
    jobList.appendChild(article);
    attachCardLogic(article);
    updateCounters();
}


/* =========================================================
   FILTER LOGIC
========================================================= */

filterAllBtn.addEventListener("click", () => {
    jobCards.forEach(card => (card.dataset.status = "flex"));
});

filterPendingBtn.addEventListener("click", () => {
    jobCards.forEach(card => {
        card.style.display = card.dataset.status === "pending" ? "flex" : "none";
    });
});

filterInterviewBtn.addEventListener("click", () => {
    jobCards.forEach(card => {
        card.style.display = card.dataset.status === "interview" ? "flex" : "none";
    });
});

filterRejectedBtn.addEventListener("click", () => {
    jobCards.forEach(card => {
        card.style.display = card.dataset.status === "rejected" ? "flex" : "none";
    });
});


/* =========================================================
   FILTER BUTTON ACTIVE UI
========================================================= */

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => {
            btn.classList.remove("bg-sky-500", "text-white");
            btn.classList.add("bg-white", "text-gray-500");
        });

        button.classList.add("bg-sky-500", "text-white");
        button.classList.remove("bg-white", "text-gray-500");
    });
});


