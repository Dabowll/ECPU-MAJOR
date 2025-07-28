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

// Helper function to calculate time breakdown
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
    // Get all exam dates and inputs
    const mathDate = new Date(document.getElementById('AdvDate').value);
    const englishDate = new Date(document.getElementById('englishDate').value);
    const historyDate = new Date(document.getElementById('AncientHistoryDate').value);
    const computingDate = new Date(document.getElementById('ECPUDate').value);
    const hospitalityDate = new Date(document.getElementById('Hospitality').value);
    const dailyHours = parseFloat(document.getElementById('hours').value) || 2;
    const difficulty = document.getElementById('difficulty').value;
    const goals = document.getElementById('goals').value;

    // Validate dates
    const subjects = [
        { name: "Math Advanced", date: mathDate, priority: 5 },
        { name: "English Standard", date: englishDate, priority: 4 },
        { name: "Ancient History", date: historyDate, priority: 3 },
        { name: "Enterprise Computing", date: computingDate, priority: 2 },
        { name: "Hospitality", date: hospitalityDate, priority: 1 }
    ];
    
    const validSubjects = subjects.filter(subject => !isNaN(subject.date.getTime()));
    
    if (validSubjects.length === 0) {
        document.getElementById('studyPlanOutput').innerHTML = "<div class='alert alert-danger'>Please enter at least one exam date.</div>";
        return;
    }
    
    // Calculate days until each exam and sort by proximity
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    validSubjects.forEach(subject => {
        subject.daysLeft = Math.floor((subject.date - today) / (1000 * 60 * 60 * 24));
        subject.totalDays = subject.daysLeft; // Store total days for progress calculation
    });
    
    validSubjects.sort((a, b) => a.daysLeft - b.daysLeft);
    
    // Calculate total study days
    const examDates = validSubjects.map(s => s.date);
    const lastExam = new Date(Math.max(...examDates));
    const totalDays = Math.floor((lastExam - today) / (1000 * 60 * 60 * 24));
    
    // Generate daily plan
    let plan = `<div class='study-plan-container'>
        <h3><i class='fas fa-calendar-alt'></i> Multi-Subject Study Schedule</h3>
        <div class='plan-meta'>
            <span><i class='fas fa-clock'></i> ${dailyHours} study hours/day</span>
            <span><i class='fas fa-school'></i> School: 9:00 AM - 3:30 PM</span>
            <span><i class='fas fa-bed'></i> Wake-up: 6:00 AM</span>
            <span><i class='fas fa-book'></i> Subjects: ${validSubjects.map(s => s.name).join(', ')}</span>
        </div>
        <div class='subject-priorities'>
            <h4><i class='fas fa-sort-amount-down'></i> Exam Priority Order</h4>
            <ol>`;
            
    validSubjects.forEach((subject, index) => {
        plan += `<li>${subject.name} (${subject.date.toDateString()} - ${subject.daysLeft} days)</li>`;
    });
            
    plan += `</ol></div>`;
    
    // Generate subject overview with knowledge bank content
    plan += `<div class='knowledge-summary'>
        <h4><i class='fas fa-graduation-cap'></i> Subject Overview & Study Strategies</h4>`;
    
    validSubjects.forEach(subject => {
        const subjectData = knowledgeBank[subject.name] || { topics: [], tips: [] };
        plan += `<div class='subject-info'>
            <h5>${subject.name} Study Guide</h5>
            <div><strong>Key Topics:</strong> ${subjectData.topics.join(', ')}</div>
            <div><strong>Expert Tips:</strong>
                <ul>${subjectData.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>
            </div>
        </div>`;
    });
    
    plan += `</div>`;
    
    // Generate daily schedule
    for (let day = 1; day <= totalDays; day++) {
        const studyDate = new Date(today);
        studyDate.setDate(today.getDate() + day);
        const dateStr = studyDate.toDateString();
        
        // Check if it's an exam day
        const examSubjects = validSubjects.filter(s => s.date.toDateString() === dateStr);
        if (examSubjects.length > 0) {
            plan += `<div class='exam-day'>
                <h4><i class='fas fa-calendar-day'></i> ${dateStr} - EXAM DAY</h4>
                <div class='exam-subjects'>`;
                
            examSubjects.forEach(subject => {
                plan += `<div class='exam-subject'>
                    <h5>${subject.name} Exam</h5>
                    <div class='time-schedule'>
                        <div class='time-block'><span class='time'>6:00 AM</span> Wake up, light breakfast</div>
                        <div class='time-block'><span class='time'>6:30 AM</span> Quick review (30 mins)</div>
                        <div class='time-block'><span class='time'>7:00 AM</span> Get ready</div>
                        <div class='time-block'><span class='time'>8:30 AM</span> Travel to school</div>
                        <div class='time-block important'><span class='time'>9:00 AM</span> EXAM TIME</div>
                    </div>
                </div>`;
            });
                
            plan += `</div></div>`;
            continue;
        }
        
        // Calculate subject weights based on urgency
        const activeSubjects = validSubjects.filter(s => s.date > studyDate);
        const weights = activeSubjects.map(subject => {
            const daysUntilExam = Math.floor((subject.date - studyDate) / (1000 * 60 * 60 * 24));
            return (1 / daysUntilExam) * subject.priority;
        });
        
        const totalWeight = weights.reduce((sum, w) => sum + w, 0) || 1; // Avoid division by zero
        
        // Calculate available time slots
        const morningStudy = Math.min(dailyHours * 0.4, 1.5);
        const eveningStudy = dailyHours - morningStudy;
        
        plan += `<div class='day-plan'>
            <h4><i class='fas fa-calendar-day'></i> Day ${day}: ${dateStr}</h4>
            <div class='time-schedule'>
                <div class='time-block'><span class='time'>6:00 AM</span> Wake up</div>`;
        
        // MORNING SESSION - DYNAMIC TIME BLOCKS
        let currentMorningTime = 6.5; // Start at 6:30 AM
        const morningSubjects = [];
        
        // Collect morning subjects with their allocated time
        activeSubjects.forEach((subject, index) => {
            const hours = (weights[index] / totalWeight) * morningStudy;
            if (hours >= 0.3) {
                morningSubjects.push({
                    subject,
                    hours,
                    timeBreakdown: getTimeBreakdown(
                        subject.name, 
                        hours, 
                        Math.floor((subject.date - studyDate) / (1000 * 60 * 60 * 24)), 
                        subject.totalDays
                    )
                });
            }
        });

        // Generate time blocks for each morning subject
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
        
        plan += `<div class='time-block'><span class='time'>${formatTime(currentMorningTime)}</span> Breakfast & get ready</div>
                <div class='time-block'><span class='time'>8:30 AM</span> Travel to school</div>
                <div class='time-block school'><span class='time'>9:00 AM - 3:30 PM</span> School</div>
                <div class='time-block'><span class='time'>4:00 PM</span> Snack & break</div>`;
        
        // EVENING SESSION - DYNAMIC TIME BLOCKS
        let currentEveningTime = 16.5; // Start at 4:30 PM
        const eveningSubjects = [];
        
        // Collect evening subjects with their allocated time
        activeSubjects.forEach((subject, index) => {
            if (morningSubjects.some(item => item.subject.name === subject.name)) return;
            
            const hours = (weights[index] / totalWeight) * eveningStudy;
            if (hours >= 0.3) {
                eveningSubjects.push({
                    subject,
                    hours,
                    timeBreakdown: getTimeBreakdown(
                        subject.name, 
                        hours, 
                        Math.floor((subject.date - studyDate) / (1000 * 60 * 60 * 24)), 
                        subject.totalDays
                    )
                });
            }
        });

        // Generate time blocks for each evening subject
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
        }
        else if (activeSubjects.length === 0) {
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
        
        // Tab switching functionality
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons and content
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

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
    
    // Add general tips
    plan += `<div class='general-tips'>
        <h4><i class='fas fa-lightbulb'></i> Advanced Study Strategies</h4>
        <ul>
            <li><strong>Interleaving:</strong> Mix different subjects in a single session to improve retention</li>
            <li><strong>Spaced Repetition:</strong> Review difficult topics at increasing intervals</li>
            <li><strong>Active Recall:</strong> Test yourself instead of just re-reading material</li>
            <li><strong>Pomodoro Technique:</strong> 25-minute focused sessions with 5-minute breaks</li>
            <li><strong>Dual Coding:</strong> Combine verbal and visual information for complex topics</li>
            <li><strong>Weekend Planning:</strong> Reserve weekends for mock exams and comprehensive reviews</li>
        </ul>
    </div></div>`;
    
    document.getElementById('studyPlanOutput').innerHTML = plan;
}

// Helper function to determine daily focus
function getDailyFocus(currentDay, totalDays, difficulty) {
    const phase = currentDay / totalDays;
    let focus = "";
    
    if (difficulty === 'Beginner') {
        if (phase < 0.3) focus = "Master fundamentals";
        else if (phase < 0.7) focus = "Practice core concepts";
        else focus = "Review past papers";
    } 
    else if (difficulty === 'Advanced') {
        if (phase < 0.2) focus = "Advanced concepts";
        else if (phase < 0.5) focus = "Complex applications";
        else if (phase < 0.8) focus = "Timed practice";
        else focus = "Exam strategies";
    } 
    else {
        if (phase < 0.4) focus = "Concept integration";
        else if (phase < 0.8) focus = "Problem areas";
        else focus = "Full revisions";
    }
    
    return focus;
}

// Get daily study strategy based on progress
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

// Add event listener
document.getElementById('generatePlanBtn').addEventListener('click', generatePlan);

// Add CSS styles for the new elements
const style = document.createElement('style');
style.innerHTML = `
.study-plan-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
}
.plan-meta {
    background: #f8f9fc;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
.plan-meta span {
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    padding: 8px 15px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.subject-priorities {
    background: #eef2ff;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
}
.subject-priorities ol {
    padding-left: 20px;
}
.subject-priorities li {
    margin-bottom: 8px;
    padding: 8px;
    background: white;
    border-radius: 6px;
}
.knowledge-summary {
    margin-bottom: 25px;
}
.subject-info {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.subject-info h5 {
    color: #2c5282;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}
.exam-day {
    background: #fff5f5;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
}
.day-plan {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.time-schedule {
    position: relative;
    margin-left: 90px;
    padding-left: 15px;
    border-left: 2px solid #e2e8f0;
}
.time-schedule::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #4e73df;
    opacity: 0.3;
    z-index: 0;
}
.time-block {
    position: relative;
    padding: 12px 15px;
    margin-bottom: 10px;
    border-radius: 6px;
    background: white;
    z-index: 1;
    box-shadow: 0 2px 3px rgba(0,0,0,0.03);
}
.time-block .time {
    position: absolute;
    left: -90px;
    width: 80px;
    text-align: right;
    font-weight: 600;
    color: #4a5568;
}
.time-block.study {
    background: #f0f7ff;
    border-left: 3px solid #4299e1;
}
.time-block.school {
    background: #f0fff4;
    border-left: 3px solid #48bb78;
}
.time-block.relax {
    background: #fffaf0;
    border-left: 3px solid #ed8936;
}
.time-block.important {
    background: #fff5f7;
    border-left: 3px solid #e53e3e;
    font-weight: bold;
}
.subject-block {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px;
    margin: 10px 0;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.subject-block.extra-time {
    border-left: 3px solid #4e73df;
    background-color: #f8f9fc;
}
.subject-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.subject-tag {
    background: #4e73df;
    color: white;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: bold;
}
.subject-phase {
    font-size: 0.8rem;
    padding: 3px 8px;
    border-radius: 12px;
    text-transform: capitalize;
}
.subject-phase.early { background: #e6f4ea; color: #0d6832; }
.subject-phase.mid { background: #fff8e6; color:rgb(221, 182, 24); }
.subject-phase.late { background: #fde8e8; color: #c0392b; }
.subject-time {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.1rem;
}
.time-breakdown {
    border-top: 1px dashed #eee;
    padding-top: 10px;
    margin-top: 8px;
}
.activity-item {
    margin-bottom: 8px;
    position: relative;
    background: #f9f9f9;
    border-radius: 4px;
    overflow: hidden;
}
.activity-bar {
    position: absolute;
    height: 100%;
    background: rgba(78, 115, 223, 0.15);
    top: 0;
    left: 0;
    z-index: 0;
}
.activity-details {
    position: relative;
    z-index: 1;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
}
.activity-details span:first-child {
    font-weight: 600;
    color: #2c3e50;
}
.activity-details span:last-child {
    color: #555;
    text-align: right;
    max-width: 60%;
}
.daily-tips {
    background: #f0f9ff;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 3px solid #63b3ed;
}
.general-tips {
    background: #f0fff4;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;
    border-left: 3px solid #68d391;
}
.general-tips ul {
    padding-left: 20px;
}
.general-tips li {
    margin-bottom: 10px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .time-schedule {
        margin-left: 70px;
    }
    .time-block .time {
        left: -70px;
        width: 60px;
        font-size: 0.85rem;
    }
    .subject-header {
        flex-wrap: wrap;
        gap: 8px;
    }
    .activity-details {
        flex-direction: column;
        gap: 4px;
    }
    .activity-details span:last-child {
        max-width: 100%;
        text-align: left;
    }
    .plan-meta {
        flex-direction: column;
        gap: 10px;
    }
}
`;
document.head.appendChild(style);     
const tf = require('@tensorflow/tfjs');

// Simulated dataset
const data = {
  xs: tf.tensor2d([
    [3, 7],
    [5, 8],
    [4, 6],
    [6, 9],
    [2, 5],
    [7, 8],
    [3, 6],
    [5, 7],
    [4, 6],
    [6, 9]
  ], [10, 2]),
  ys: tf.tensor2d([
    [5.2],
    [6.3],
    [5.1],
    [7.4],
    [4.0],
    [6.8],
    [5.0],
    [6.0],
    [5.2],
    [7.5]
  ], [10, 1])
};

// Define the model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [2] }));
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Train the model
async function trainModel() {
  await model.fit(data.xs, data.ys, { epochs: 50 });
  console.log('Model trained');
}

// Make a prediction
async function predictPriority(studyHours, studyQuality) {
  const input = tf.tensor2d([[studyHours, studyQuality]], [1, 2]);
  const prediction = model.predict(input);
  prediction.print();
}

// Example usage
trainModel().then(() => {
  predictPriority(5, 7); // Predict priority for 5 hours of study with quality 7
});
