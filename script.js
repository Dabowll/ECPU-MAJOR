document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const weekToggle = document.getElementById("weekToggle");
    const weekA = document.getElementById("weekA");
    const weekB = document.getElementById("weekB");
    const weekTitle = document.getElementById("weekTitle");

    let isDarkMode = false;
    let isWeekA = true;

    // 🌙 Toggle Dark/Light Mode
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        isDarkMode = !isDarkMode;
        themeToggle.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // 🔄 Toggle Between Week A & Week B
    weekToggle.addEventListener("click", function () {
        isWeekA = !isWeekA;
        if (isWeekA) {
            weekA.style.display = "table";
            weekB.style.display = "none";
            weekTitle.textContent = "Week A Schedule";
            weekToggle.textContent = "Switch to Week B";
        } else {
            weekA.style.display = "none";
            weekB.style.display = "table";
            weekTitle.textContent = "Week B Schedule";
            weekToggle.textContent = "Switch to Week A";
        }
    });

    // 📂 Task Management System
    document.getElementById("addTaskButton").addEventListener("click", function () {
        let taskText = document.getElementById("taskInput").value.trim();
        let taskDate = document.getElementById("taskDate").value;
        let selectedSubject = document.getElementById("subjectSelect").value;

        if (!taskText) {
            alert("Please enter a task!");
            return;
        }

        let selectedFolder = document.getElementById(`${selectedSubject}-folder`);
        if (!selectedFolder) {
            alert("Please select a valid subject!");
            return;
        }

        // Create new task
        let taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `<strong>${taskText}</strong> <span class="task-date">${taskDate || "No Due Date"}</span>`;

        // Animate task moving into the folder
        taskItem.style.opacity = "0";
        selectedFolder.querySelector(".task-list").appendChild(taskItem);
        setTimeout(() => taskItem.style.opacity = "1", 100);

        // Reset input fields
        document.getElementById("taskInput").value = "";
        document.getElementById("taskDate").value = "";
    });

    // Clickable file expansion
    document.querySelectorAll('.folder').forEach(folder => {
        folder.addEventListener('click', function () {
            this.classList.toggle("open-folder");
        });
    });
});

var countDownDate = new Date("Oct 16, 2025 09:00:00 GMT+1000").getTime();

        function updateCountdown() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // If countdown is over, display message
            if (distance < 0) {
                document.getElementById("countdown").innerHTML = "The HSC has started!";
                clearInterval(timerInterval);
                return;
            }

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Smoothly update only when the value changes
            updateDigit("days", days);
            updateDigit("hours", hours);
            updateDigit("minutes", minutes);
            updateDigit("seconds", seconds);
        }

        function updateDigit(id, newValue) {
            var element = document.getElementById(id);
            var currentValue = element.innerText;

            if (currentValue !== String(newValue).padStart(2, '0')) {
                element.innerHTML = `<span>${String(newValue).padStart(2, '0')}</span>`;
            }
        }

        // Update every second
        var timerInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Run immediately to avoid delay
        
        
        // Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.navbar-mobile-toggle');
    const navLinks = document.querySelector('.navbar-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Highlight current page in navbar
    const currentPage = location.pathname.split('/').pop();
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
});