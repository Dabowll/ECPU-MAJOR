// Enhanced Knowledge Bank with detailed activity breakdowns
const knowledgeBank = {
    "Math Advanced": {
        topics: ["Calculus", "Trigonometry", "Algebra", "Statistics", "Financial Maths", "Functions"],
        tips: [
            "Practice past papers with a focus on problem-solving techniques",
            "Create formula flashcards for quick revision",
            "Focus on understanding concepts rather than memorization",
            "Identify your weak areas and dedicate extra time to them",
            "Time yourself during practice to improve speed"
        ],
        activities: {
            early: [
                { name: "Concept Introduction", percent: 60, description: "Learn new theories and formulas" },
                { name: "Basic Practice", percent: 30, description: "Simple application exercises" },
                { name: "Quick Review", percent: 10, description: "Previous day's concepts" }
            ],
            mid: [
                { name: "Problem Areas", percent: 50, description: "Focus on weak topics" },
                { name: "Practice Sets", percent: 35, description: "Mixed difficulty problems" },
                { name: "Concept Review", percent: 15, description: "Core theory refresh" }
            ],
            late: [
                { name: "Timed Practice", percent: 60, description: "Exam-style questions" },
                { name: "Error Review", percent: 25, description: "Mistake analysis" },
                { name: "Quick Revision", percent: 15, description: "Formula flashcards" }
            ]
        }
    },
    "English Standard": {
        topics: ["Essay Writing", "Text Analysis", "Creative Writing", "Grammar", "Shakespeare", "Film Analysis"],
        tips: [
            "Analyze past papers for recurring question patterns",
            "Practice writing essays under timed conditions",
            "Build vocabulary with daily word exercises",
            "Create character and theme analysis mind maps",
            "Peer review essays for constructive feedback"
        ],
        activities: {
            early: [
                { name: "Text Analysis", percent: 50, description: "Close reading of key texts" },
                { name: "Vocabulary Building", percent: 30, description: "Word exercises and usage" },
                { name: "Grammar Review", percent: 20, description: "Sentence structure practice" }
            ],
            mid: [
                { name: "Essay Structuring", percent: 40, description: "Thesis and argument development" },
                { name: "Thematic Analysis", percent: 30, description: "Theme exploration techniques" },
                { name: "Practice Essays", percent: 30, description: "Partial essay writing" }
            ],
            late: [
                { name: "Timed Essays", percent: 60, description: "Full exam simulations" },
                { name: "Peer Review", percent: 25, description: "Feedback on written work" },
                { name: "Quote Revision", percent: 15, description: "Key quotation memorization" }
            ]
        }
    },
    "Ancient History": {
        topics: ["Egyptian Civilization", "Greek Democracy", "Roman Empire", "Archaeology Methods", "Historical Sources", "Persian Wars"],
        tips: [
            "Create timelines with key events and figures",
            "Practice source-based analysis techniques",
            "Develop essay plans for common themes",
            "Connect historical events to modern parallels",
            "Use visual mind maps for cause-effect relationships"
        ],
        activities: {
            early: [
                { name: "Timeline Creation", percent: 40, description: "Key events chronology" },
                { name: "Source Analysis", percent: 35, description: "Primary document examination" },
                { name: "Fact Memorization", percent: 25, description: "Important dates/figures" }
            ],
            mid: [
                { name: "Essay Planning", percent: 45, description: "Thesis and argument development" },
                { name: "Comparative Analysis", percent: 35, description: "Cross-period comparisons" },
                { name: "Historiography", percent: 20, description: "Scholar perspectives" }
            ],
            late: [
                { name: "Timed Responses", percent: 55, description: "Exam-style questions" },
                { name: "Source Evaluation", percent: 30, description: "Critical analysis practice" },
                { name: "Fact Recall", percent: 15, description: "Quick date/figure review" }
            ]
        }
    },
    "Enterprise Computing": {
        topics: ["Networking", "Database Design", "Project Management", "Web Development", "Cyber Security", "System Analysis"],
        tips: [
            "Practice diagram-based questions for networks and databases",
            "Create cheat sheets for key concepts and commands",
            "Work on practical projects to apply theoretical knowledge",
            "Stay updated with current tech trends and case studies",
            "Use flashcards for terminology and definitions"
        ],
        activities: {
            early: [
                { name: "Concept Diagrams", percent: 45, description: "Network/database visualization" },
                { name: "Command Practice", percent: 35, description: "Key syntax exercises" },
                { name: "Terminology Review", percent: 20, description: "Definition flashcards" }
            ],
            mid: [
                { name: "Case Studies", percent: 40, description: "Real-world applications" },
                { name: "Problem Solving", percent: 35, description: "Scenario-based exercises" },
                { name: "System Design", percent: 25, description: "Architecture planning" }
            ],
            late: [
                { name: "Timed Simulations", percent: 60, description: "Exam-style problems" },
                { name: "Error Debugging", percent: 25, description: "Code/system troubleshooting" },
                { name: "Quick Reference", percent: 15, description: "Cheat sheet review" }
            ]
        }
    },
    "Hospitality": {
        topics: ["Food Safety", "Menu Planning", "Customer Service", "Event Management", "Culinary Techniques", "Industry Operations"],
        tips: [
            "Create process flowcharts for food preparation",
            "Practice scenario-based customer service responses",
            "Develop checklists for event planning stages",
            "Research current hospitality trends and innovations",
            "Create case studies of successful hospitality businesses"
        ],
        activities: {
            early: [
                { name: "Procedure Review", percent: 40, description: "Safety and service protocols" },
                { name: "Case Analysis", percent: 35, description: "Real-world scenarios" },
                { name: "Terminology", percent: 25, description: "Industry vocabulary" }
            ],
            mid: [
                { name: "Scenario Responses", percent: 45, description: "Customer interaction practice" },
                { name: "Event Planning", percent: 35, description: "Checklist development" },
                { name: "Menu Design", percent: 20, description: "Nutritional and cost analysis" }
            ],
            late: [
                { name: "Timed Scenarios", percent: 55, description: "Exam-style responses" },
                { name: "Procedure Recall", percent: 30, description: "Key protocol review" },
                { name: "Trend Analysis", percent: 15, description: "Current industry developments" }
            ]
        }
    }
};

// Helper functions
function getTimeBreakdown(subject, hours, daysUntilExam, totalDays) {
    const phase = daysUntilExam / totalDays;
    const phaseType = phase > 0.6 ? 'early' : phase > 0.3 ? 'mid' : 'late';
    const activities = knowledgeBank[subject]?.activities?.[phaseType] || [];
    
    const totalMinutes = hours * 60;
    let breakdown = [];
    let remainingMinutes = totalMinutes;
    
    // Calculate time for each activity
    activities.forEach((activity, index) => {
        if (index === activities.length - 1) {
            breakdown.push({
                name: activity.name,
                minutes: remainingMinutes,
                description: activity.description || ''
            });
        } else {
            const activityMinutes = Math.floor(totalMinutes * (activity.percent / 100));
            breakdown.push({
                name: activity.name,
                minutes: activityMinutes,
                description: activity.description || ''
            });
            remainingMinutes -= activityMinutes;
        }
    });
    
    return {
        phase: phaseType,
        breakdown: breakdown
    };
}

// Helper function to format decimal hours to readable time
function formatTime(decimalHours) {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

function generatePlan() {
    try {
        // Get exam dates
        const examDates = {
            mathDate: new Date(document.getElementById('AdvDate').value),
            englishDate: new Date(document.getElementById('englishDate').value),
            historyDate: new Date(document.getElementById('AncientHistoryDate').value),
            computingDate: new Date(document.getElementById('ECPUDate').value),
            hospitalityDate: new Date(document.getElementById('Hospitality').value)
        };

        // Validate that at least one date is valid
        const validDates = Object.values(examDates).filter(date => !isNaN(date.getTime()));
        if (validDates.length === 0) {
            throw new Error('Please enter at least one exam date');
        }

        const dailyHours = Math.max(1, Math.min(12, parseFloat(document.getElementById('hours').value) || 2));
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Create subjects array with valid dates
        const subjects = [
            { name: "Math Advanced", date: examDates.mathDate, priority: 5 },
            { name: "English Standard", date: examDates.englishDate, priority: 4 },
            { name: "Ancient History", date: examDates.historyDate, priority: 3 },
            { name: "Enterprise Computing", date: examDates.computingDate, priority: 2 },
            { name: "Hospitality", date: examDates.hospitalityDate, priority: 1 }
        ].filter(subject => !isNaN(subject.date.getTime()));

        // Add daysLeft to each subject
        subjects.forEach(subject => {
            subject.daysLeft = Math.floor((subject.date - today) / (1000 * 60 * 60 * 24));
            subject.totalDays = subject.daysLeft;
        });

        // Sort subjects by proximity to exam date
        subjects.sort((a, b) => a.daysLeft - b.daysLeft);

        // Generate the plan content
        const plan = generatePlanContent(subjects, dailyHours, today);

        // Create tabbed interface
        document.getElementById('studyPlanOutput').innerHTML = `
            <div class="tab-container">
                <div class="tab-buttons">
                    <button class="tab-btn active" data-tab="schedule">Schedule</button>
                    <button class="tab-btn" data-tab="analytics">Analytics</button>
                    <button class="tab-btn" data-tab="resources">Resources</button>
                    <button class="tab-btn" data-tab="studyTips">Study Tips</button>
                </div>
                
                <div id="schedule" class="tab-content active">
                    ${plan}
                </div>

                <div id="analytics" class="tab-content">
                    ${generateAnalytics(subjects, dailyHours)}
                </div>

                <div id="resources" class="tab-content">
                    <div class="resources-container">
                        <h3><i class="fas fa-book"></i> Study Resources</h3>
                        ${subjects.map(subject => `
                            <div class="resource-section">
                                <h4>${subject.name}</h4>
                                <div class="resource-links">
                                    ${getSubjectResources(subject.name)}
                                </div>
                                <div class="resource-tools">
                                    <h5>Recommended Tools</h5>
                                    ${getSubjectTools(subject.name)}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div id="studyTips" class="tab-content">
                    ${generateStudyTips()}
                </div>
            </div>`;

        // Initialize charts and tabs
        setTimeout(() => {
            initializeCharts(subjects, dailyHours);
            initializeTabListeners();
        }, 0);

    } catch (error) {
        document.getElementById('studyPlanOutput').innerHTML = 
            `<div class='alert alert-danger'>${error.message}</div>`;
        console.error('Plan generation error:', error);
    }
}

// Add these helper functions
function generateAnalytics(subjects, dailyHours) {
    const totalWeight = subjects.reduce((sum, s) => sum + (1 / s.daysLeft) * s.priority, 0);
    const analyticsData = subjects.map(subject => ({
        name: subject.name,
        allocation: ((1 / subject.daysLeft) * subject.priority / totalWeight) * dailyHours,
        percentage: ((1 / subject.daysLeft) * subject.priority / totalWeight) * 100
    }));

    return `
        <div class="analytics-container">
            <h3><i class="fas fa-chart-pie"></i> Time Allocation Analysis</h3>
            <div class="pie-chart-container">
                <canvas id="timeAllocationChart"></canvas>
            </div>
            <div class="analytics-breakdown">
                <h4>Daily Time Breakdown</h4>
                <div class="breakdown-list">
                    ${analyticsData.map(subject => `
                        <div class="breakdown-item">
                            <div class="subject-label">${subject.name}</div>
                            <div class="progress-bar">
                                <div class="progress" style="width: ${subject.percentage}%"></div>
                            </div>
                            <div class="time-value">${subject.allocation.toFixed(1)}h (${subject.percentage.toFixed(1)}%)</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>`;
}

// Helper function to initialize charts
function initializeCharts(subjects, dailyHours) {
    setTimeout(() => {
        const ctx = document.getElementById('timeAllocationChart')?.getContext('2d');
        if (ctx) {
            const totalWeight = subjects.reduce((sum, s) => sum + (1 / s.daysLeft) * s.priority, 0);
            const analyticsData = subjects.map(subject => ({
                name: subject.name,
                allocation: ((1 / subject.daysLeft) * subject.priority / totalWeight) * dailyHours
            }));

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: analyticsData.map(subject => subject.name),
                    datasets: [{
                        data: analyticsData.map(subject => subject.allocation),
                        backgroundColor: [
                            '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b',
                            '#858796', '#5a5c69', '#2e59d9', '#17a673', '#2c9faf'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } }
                }
            });
        }
    }, 0);
}

// Helper function to initialize tab listeners
function initializeTabListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.getAttribute('data-tab'))?.classList.add('active');
        });
    });
}

// TensorFlow initialization
function initializeTensorFlow() {
    const tfData = {
        xs: tf.tensor2d([
            [3, 7], [5, 8], [4, 6], [6, 9], [2, 5],
            [7, 8], [3, 6], [5, 7], [4, 6], [6, 9]
        ], [10, 2]),
        ys: tf.tensor2d([
            [5.2], [6.3], [5.1], [7.4], [4.0],
            [6.8], [5.0], [6.0], [5.2], [7.5]
        ], [10, 1])
    };

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [2] }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    // Train model and set up prediction
    model.fit(tfData.xs, tfData.ys, { epochs: 50 }).then(() => {
        document.getElementById('predictPriorityBtn')?.addEventListener('click', async () => {
            const hours = parseFloat(document.getElementById('priorityHours').value) || 0;
            const prediction = await model.predict(tf.tensor2d([[hours, 7]], [1, 2]));
            document.getElementById('priorityOutput').innerText = 
                `Predicted Study Priority: ${prediction.dataSync()[0].toFixed(2)}`;
        });
    });
}

// Fix resource definitions
function getSubjectResources(subject) {
    const resources = {
        "Math Advanced": `
            <a href="https://www.khanacademy.org/math" target="_blank">
                <i class="fas fa-external-link-alt"></i> Khan Academy Math
            </a>
            <a href="https://www.wolframalpha.com/" target="_blank">
                <i class="fas fa-calculator"></i> Wolfram Alpha
            </a>
            <a href="https://www.mathway.com/" target="_blank">
                <i class="fas fa-square-root-alt"></i> Mathway
            </a>
        `,
        "English Standard": `
            <a href="https://www.grammarly.com/" target="_blank">
                <i class="fas fa-spell-check"></i> Grammarly
            </a>
            <a href="https://owl.purdue.edu/" target="_blank">
                <i class="fas fa-book"></i> Purdue OWL
            </a>
        `,
        "Ancient History": `
            <a href="https://www.ancient.eu/" target="_blank">
                <i class="fas fa-landmark"></i> Ancient History Encyclopedia
            </a>
            <a href="https://www.perseus.tufts.edu/" target="_blank">
                <i class="fas fa-scroll"></i> Perseus Digital Library
            </a>
        `,
        "Enterprise Computing": `
            <a href="https://www.w3schools.com/" target="_blank">
                <i class="fas fa-code"></i> W3Schools
            </a>
            <a href="https://www.codecademy.com/" target="_blank">
                <i class="fas fa-laptop-code"></i> Codecademy
            </a>
        `,
        "Hospitality": `
            <a href="https://www.foodnetwork.com/" target="_blank">
                <i class="fas fa-utensils"></i> Food Network
            </a>
            <a href="https://www.servsafe.com/" target="_blank">
                <i class="fas fa-shield-alt"></i> ServSafe
            </a>
        `
    };
    return resources[subject] || '<p>Resources coming soon...</p>';
}

// Helper function for subject resources
function getSubjectResources(subject) {
    const resources = {
        "Math Advanced": `
            <a href="https://www.khanacademy.org/math" target="_blank"><i class="fas fa-external-link-alt"></i> Khan Academy Math</a>
            <a href="https://www.wolframalpha.com/" target="_blank"><i class="fas fa-calculator"></i> Wolfram Alpha</a>
            <a href="https://www.mathway.com/" target="_blank"><i class="fas fa-square-root-alt"></i> Mathway</a>
        `,
        "English Standard": `
            <a href="https://www.grammarly.com/" target="_blank"><i class="fas fa-spell-check"></i> Grammarly</a>
            <a href="https://owl.purdue.edu/" target="_blank"><i class="fas fa-book"></i> Purdue OWL</a>
        `,
        "Ancient History": `
            <a href="https://www.ancient.eu/" target="_blank"><i class="fas fa-landmark"></i> Ancient History Encyclopedia</a>
            <a href="https://www.perseus.tufts.edu/" target="_blank"><i class="fas fa-scroll"></i> Perseus Digital Library</a>
        `,
        "Enterprise Computing": `
            <a href="https://www.w3schools.com/" target="_blank"><i class="fas fa-code"></i> W3Schools</a>
            <a href="https://www.codecademy.com/" target="_blank"><i class="fas fa-laptop-code"></i> Codecademy</a>
        `,
        "Hospitality": `
            <a href="https://www.foodnetwork.com/" target="_blank"><i class="fas fa-utensils"></i> Food Network</a>
            <a href="https://www.servsafe.com/" target="_blank"><i class="fas fa-shield-alt"></i> ServSafe</a>
        `
    };
    return resources[subject] || '<p>Resources coming soon...</p>';
}

// Helper function for subject tools
function getSubjectTools(subject) {
    const tools = {
        "Math Advanced": `
            <div class="tool-item">
                <i class="fas fa-calculator"></i>
                <span>Scientific Calculator</span>
            </div>
            <div class="tool-item">
                <i class="fas fa-pencil-ruler"></i>
                <span>Geometry Set</span>
            </div>
        `,
        "English Standard": `
            <div class="tool-item">
                <i class="fas fa-book"></i>
                <span>Dictionary</span>
            </div>
            <div class="tool-item">
                <i class="fas fa-highlighter"></i>
                <span>Highlighters</span>
            </div>
        `,
        "Ancient History": `
            <div class="tool-item">
                <i class="fas fa-landmark"></i>
                <span>Timeline Chart</span>
            </div>
            <div class="tool-item">
                <i class="fas fa-scroll"></i>
                <span>Sourcebook</span>
            </div>
        `,
        "Enterprise Computing": `
            <div class="tool-item">
                <i class="fas fa-laptop-code"></i>
                <span>Code Editor</span>
            </div>
            <div class="tool-item">
                <i class="fas fa-database"></i>
                <span>Database Tool</span>
            </div>
        `,
        "Hospitality": `
            <div class="tool-item">
                <i class="fas fa-utensils"></i>
                <span>Recipe Book</span>
            </div>
            <div class="tool-item">
                <i class="fas fa-clipboard-list"></i>
                <span>Checklist</span>
            </div>
        `
    };
    return tools[subject] || '<p>Tools list coming soon...</p>';
}

// Helper function to get study strategy
function getStudyStrategy(day, totalDays, subjectCount) {
    const phase = day / totalDays;
    if (day === 1) return "Initial assessment - identify strengths/weaknesses";
    if (phase < 0.3) {
        return `Focus on understanding core concepts (${subjectCount} subjects)`;
    }
    if (phase < 0.6) {
        return "Practice application of concepts + weekly reviews";
    }
    if (phase < 0.8) {
        return "Past paper practice + targeted revision";
    }
    return "Full exam simulations + confidence building";
}

// The following function generates the plan content for the study planner.
function generatePlanContent(subjects, dailyHours, today) {
    // Filter out subjects with valid exam dates
    const validSubjects = subjects.filter(s => s.daysLeft > 0);
    if (validSubjects.length === 0) return "<div class='alert alert-warning'>No valid subjects found.</div>";

    // Calculate weights and allocations
    const totalWeight = validSubjects.reduce((sum, s) => sum + (1 / s.daysLeft) * s.priority, 0);

    // Prepare plan string
    let plan = "";
    const totalDays = Math.max(...validSubjects.map(s => s.daysLeft));
    for (let day = 1; day <= totalDays; day++) {
        plan += `<div class='day-plan'><h4>Day ${day}</h4>`;
        // Calculate allocations for this day
        const activeSubjects = validSubjects.filter(s => s.daysLeft >= day);
        const dayWeight = activeSubjects.reduce((sum, s) => sum + (1 / (s.daysLeft - day + 1)) * s.priority, 0);

        // Allocate hours for each subject
        const allocations = activeSubjects.map(s => {
            const weight = (1 / (s.daysLeft - day + 1)) * s.priority;
            const hours = (weight / dayWeight) * dailyHours;
            return {
                subject: s,
                hours: hours,
                timeBreakdown: getTimeBreakdown(s.name, hours, s.daysLeft - day + 1, s.daysLeft)
            };
        });

        // Split into morning and evening (for demonstration, half-half)
        const morningSubjects = allocations.slice(0, Math.ceil(allocations.length / 2));
        const eveningSubjects = allocations.slice(Math.ceil(allocations.length / 2));

        let currentMorningTime = 7; // 7:00 AM
        let currentEveningTime = 16; // 4:00 PM

        // Morning block
        plan += `<div class='time-block'><span class='time'>${formatTime(currentMorningTime)}</span> Wake up & breakfast</div>`;
        currentMorningTime += 1; // 1 hour for morning routine

        morningSubjects.forEach(item => {
            const startTime = formatTime(currentMorningTime);
            currentMorningTime += item.hours;
            const endTime = formatTime(currentMorningTime);

            plan += `<div class='time-block study'>
                <span class='time'>${startTime} - ${endTime}</span>
                <div class='subject-header'>
                    <span class='subject-tag'>${item.subject.name}</span>
                    <span class='subject-phase ${item.timeBreakdown.phase}'>${item.timeBreakdown.phase} phase</span>
                    <span class='subject-time'>${item.hours.toFixed(1)}h</span>
                </div>
                <div class='time-breakdown'>`;

            item.timeBreakdown.breakdown.forEach(activity => {
                const percentage = Math.round((activity.minutes / (item.hours * 60)) * 100);
                plan += `<div class='activity-item'>
                    <div class='activity-bar' style='width:${percentage}%'></div>
                    <div class='activity-details'>
                        <span>${activity.name} (${activity.minutes}min)</span>
                        <span>${activity.description}</span>
                    </div>
                </div>`;
            });

            plan += `</div></div>`;
        });

        plan += `<div class='time-block'><span class='time'>${formatTime(currentMorningTime)}</span> Lunch & break</div>`;
        currentEveningTime = Math.max(currentEveningTime, currentMorningTime + 1);

        // Evening block
        eveningSubjects.forEach(item => {
            const startTime = formatTime(currentEveningTime);
            currentEveningTime += item.hours;
            const endTime = formatTime(currentEveningTime);

            plan += `<div class='time-block study'>
                <span class='time'>${startTime} - ${endTime}</span>
                <div class='subject-header'>
                    <span class='subject-tag'>${item.subject.name}</span>
                    <span class='subject-phase ${item.timeBreakdown.phase}'>${item.timeBreakdown.phase} phase</span>
                    <span class='subject-time'>${item.hours.toFixed(1)}h</span>
                </div>
                <div class='time-breakdown'>`;

            item.timeBreakdown.breakdown.forEach(activity => {
                const percentage = Math.round((activity.minutes / (item.hours * 60)) * 100);
                plan += `<div class='activity-item'>
                    <div class='activity-bar' style='width:${percentage}%'></div>
                    <div class='activity-details'>
                        <span>${activity.name} (${activity.minutes}min)</span>
                        <span>${activity.description}</span>
                    </div>
                </div>`;
            });

            plan += `</div></div>`;
        });

        // Handle any remaining time
        const allocatedTime = [...morningSubjects, ...eveningSubjects].reduce((sum, item) => sum + item.hours, 0);
        const remainingTime = dailyHours - allocatedTime;

        if (remainingTime > 0.2) {
            const startTime = formatTime(currentEveningTime);
            currentEveningTime += remainingTime;
            const endTime = formatTime(currentEveningTime);

            plan += `<div class='time-block study'>
                <span class='time'>${startTime} - ${endTime}</span>
                <div class='subject-header'>
                    <span class='subject-tag'>Bonus Study</span>
                    <span class='subject-time'>${remainingTime.toFixed(1)}h</span>
                </div>
                <div class='time-breakdown'>
                    <div class='activity-item'>
                        <div class='activity-bar' style='width:100%'></div>
                        <div class='activity-details'>
                            <span>Additional Practice</span>
                            <span>Focus on challenging topics</span>
                        </div>
                    </div>
                </div>
            </div>`;
        } else if (activeSubjects.length === 0) {
            const eveningStudy = dailyHours / 2;
            const startTime = formatTime(currentEveningTime);
            currentEveningTime += eveningStudy;
            const endTime = formatTime(currentEveningTime);

            plan += `<div class='time-block study'>
                <span class='time'>${startTime} - ${endTime}</span>
                <div class='subject-header'>
                    <span class='subject-tag'>General Revision</span>
                </div>
                <div class='time-breakdown'>
                    <div class='activity-item'>
                        <div class='activity-bar' style='width:100%'></div>
                        <div class='activity-details'>
                            <span>Comprehensive Review (${Math.round(eveningStudy * 60)}min)</span>
                            <span>Review all subjects with focus on weak areas</span>
                        </div>
                    </div>
                </div>
            </div>`;
        }

        // Calculate dinner time based on end of evening study
        const dinnerTime = formatTime(currentEveningTime);
        const relaxTime = formatTime(currentEveningTime + 0.5);

        plan += `<div class='time-block'><span class='time'>${dinnerTime}</span> Dinner</div>
                <div class='time-block relax'><span class='time'>${relaxTime}</span> Relax/light review</div>
                <div class='time-block'><span class='time'>10:00 PM</span> Sleep</div>
            </div>
            <div class='daily-tips'>
                <strong><i class='fas fa-lightbulb'></i> Daily Strategy:</strong> 
                ${getStudyStrategy(day, totalDays, validSubjects.length)}
            </div>
        </div>`;
    }

    return plan;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add styles
    const styleElement = document.createElement('style');
    styleElement.textContent = additionalStyles;
    document.head.appendChild(styleElement);

    // Add generate plan button listener
    document.getElementById('generatePlanBtn').addEventListener('click', generatePlan);

    // Initialize TensorFlow model
    trainModel().then(() => {
        console.log('Model ready for predictions');
        document.getElementById('predictPriorityBtn')?.addEventListener('click', async () => {
            const hours = parseFloat(document.getElementById('priorityHours').value) || 0;
            const quality = 7; // Default quality score
            const prediction = await predictPriority(hours, quality);
            const value = prediction.dataSync()[0];
            document.getElementById('priorityOutput').innerText =                `Predicted Study Priority: ${value.toFixed(2)}`;
        });
    });
});