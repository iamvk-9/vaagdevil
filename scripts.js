// scripts.js

// Navigation Handling
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-section');

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            // Show the target section
            document.getElementById(target).classList.add('active');
        });
    });

    // Load Exam Dates
    loadExamDates();

    // Load Faculty Information
    loadFaculty();

    // Load Notes
    loadNotes();
});


// scripts.js

// Function to load exam dates dynamically
function loadExamDates() {
    const examDates = [
        { course: 'First Spell of Instructions', date: '22.07.2024 to 14.09.2024' },
        { course: 'CRC Meeting-1', date: '31.08.2024' },
        { course: 'First Mid Term Examination', date: '16.09.2024 to 21.09.2024' },
        { course: 'Second Spell of Instructions', date: '23.09.2024 to 09.10.2024' },
        { course: 'Dussehra Holidays', date: '10.10.2024 to 15.10.2024' },
        { course: 'Continuation of Second Spell of Instructions', date: '16.10.2024 to 26.11.2024' }, // Fixed typo
        { course: 'CRC Meeting-2', date: '13.11.2024' },
        { course: 'Second Mid Term Examination', date: '27.11.2024 to 03.12.2024' },
        { course: 'Preparations & Practical Examinations', date: '04.12.2024 to 10.12.2024' }, // Fixed typo
        { course: 'End Semester Examinations', date: '11.12.2024 to 24.12.2024' },
        // Add more courses as needed
    ];

    const examsTable = document.getElementById('exams-table');

    examDates.forEach(exam => {
        const row = document.createElement('tr');

        const courseCell = document.createElement('td');
        courseCell.textContent = exam.course;
        row.appendChild(courseCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = exam.date; // Directly display the date string
        row.appendChild(dateCell);

        examsTable.appendChild(row);
    });
}

// Call the function to load the exam dates
loadExamDates();

// Function to load faculty information dynamically
function loadFaculty() {
    const faculty = [
        {
            name: 'Dr. ch satyanarayana',
            department: 'BSH',
        
            phone: '9948633101'
        },
        {
            name: 'k.gowtham',
            department: ' CSE(DS)',
            
            phone: '6305402643'
        },
        {
            name: 'n.ravi',
            department: 'CSE(AI&ML)',
            
            phone: '9963932064'
        },
        
        {
            name: 'k.kavitha',
            department: 'ECE',
    
            phone: '7981263531'
        },
        {
            name: 'e.mahesh',
            department: 'CSE(AI&ML)',
            
            phone: '9010809188'
        },
        {
            name: 'neeraja',
            department: 'CSE(DS)',
            
            phone: '906389824'
        },
        // Add more faculty members as needed
    ];

    const facultyList = document.getElementById('faculty-list');

    faculty.forEach(member => {
        const facultyDiv = document.createElement('div');
        facultyDiv.classList.add('faculty-member');

        const name = document.createElement('h3');
        name.textContent = member.name;
        facultyDiv.appendChild(name);

        const dept = document.createElement('p');
        dept.textContent = `Department: ${member.department}`;
        facultyDiv.appendChild(dept);

        

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;
        facultyDiv.appendChild(phone);

        facultyList.appendChild(facultyDiv);
    });
}

// Function to load notes dynamically
function loadNotes() {
    const notes = [
        { title: 'SE UNIT-1', file: 'SE unit 1.pdf.' },
        { title: 'SE UNIT-2', file: 'SE Unit2 notes.pdf' },
        { title: 'SE UNIT-3', file: 'notes/organic_chemistry.pdf' },
        { title: 'SE UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'SE UNIT-5', file: 'notes/data_structures.pdf' },

        { title: 'DS UNIT-1', file: 'DS UNIT -1.pdf' },
        { title: 'DS UNIT-2', file: '' },
        { title: 'DS UNIT-3', file: 'notes/organic_chemistry.pdf' },
        { title: 'DS UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'DS UNIT-5', file: 'notes/data_structures.pdf' },

        { title: 'OS UNIT-1', file: 'OPERATING SYSTEMS.pdf' },
        { title: 'OS UNIT-2', file: 'SE Unit2 notes.pdf' },
        { title: 'OS UNIT-3', file: 'notes/organic_chemistry.pdf' },
        { title: 'OS UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'OS UNIT-5', file: 'notes/data_structures.pdf' },

        { title: 'COA UNIT-1', file: 'COA notes.pdf' },
        { title: 'COA UNIT-2', file: 'SE Unit2 notes.pdf' },
        { title: 'COA UNIT-3', file: 'notes/organic_chemistry.pdf' },
        { title: 'COA UNIT-4', file: 'notes/genetics.pdf' },
        { title: 'COA UNIT-5', file: 'notes/data_structures.pdf' },
        // Add more notes as needed
    ];

    const notesList = document.getElementById('notes-list');

    notes.forEach(note => {
        const listItem = document.createElement('li');

        const noteTitle = document.createElement('span');
        noteTitle.textContent = note.title;

        const downloadLink = document.createElement('a');
        downloadLink.href = note.file;
        downloadLink.textContent = 'Download';
        downloadLink.target = '_blank';
        downloadLink.rel = 'noopener noreferrer';

        listItem.appendChild(noteTitle);
        listItem.appendChild(downloadLink);

        notesList.appendChild(listItem);
    });
}


// Function to load General Notes
function loadGeneralNotes() {
    const generalNotes = [
        { title: 'General NoteS 1: SE UNIT1 & UNIT2', link: 'PAPER.pdf' },
        { title: 'General Note 2: Data Structures Basics', link: 'notes/general-note-2.pdf' },
        { title: 'General Note 3: Web Development Fundamentals', link: 'notes/general-note-3.pdf' },
        // Add more general notes as needed
    ];

    const notesList = document.getElementById('general-notes-list');

    generalNotes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${note.link}" target="_blank" rel="noopener noreferrer">${note.title}</a>`;
        notesList.appendChild(listItem);
    });
}

// Initialize the General Notes section when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadGeneralNotes();
});




// Function to load Important Questions
function loadImportantQuestions() {
    const importantQuestions = [
        { title: 'Download Important Questions - MSF MID SET-2', link: 'MID SET 2.jpeg' },
        { title: 'Download Important Questions - MSF MID SET-3', link: 'MID SET 3.jpeg' },
        { title: 'Download Important Questions - MSF MID 1', link: 'mid 1-MSF imp.pdf' },
        { title: 'Download Important Questions - COA MID 1', link: '' },
        { title: 'Download Important Questions - OS MID 1', link: '' },
        { title: 'Download Important Questions - DS MID 1', link: '' },
        { title: 'Download Important Questions - SE MID 1', link: '' },



        // Add more important questions as needed
    ];

    const questionsList = document.getElementById('important-questions-list');


    importantQuestions.forEach(question => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${question.link}" target="_blank" rel="noopener noreferrer">${question.title}</a>`;
        questionsList.appendChild(listItem);
    });
}
// Initialize the General Notes section when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadImportantQuestions();
});


// Function to load Question Papers
function loadQuestionPapers() {
    const questionPapers = [
        { title: 'Download Question Paper - previous DS', link: 'AprilMay-2023 DS.pdf' },
        { title: 'Download Question Paper - previous DS', link: 'March-2022 DS.pdf' },
        {title: 'Download Question Paper - previous DS', link: 'AugustSeptember-2022 DS.pdf' },
        { title: 'Download Question Paper - mid-1 SE', link: 'Software Engineering.pdf' },
        { title: 'Download Question Paper - mid-1 OS', link: '' },
        { title: 'Download Question Paper - mid-1 COA', link: 'COA.pdf' },
        {title: 'Download Question Paper - mid-1 DS', link: 'ds question paper mid1.pdf' },
        { title: 'Download Question Paper - mid-1 MSF', link: 'MSF.pdf' },
        

        // Add more question papers as needed
    ];

    const papersList = document.getElementById('question-papers-list');

    questionPapers.forEach(paper => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${paper.link}" target="_blank" rel="noopener noreferrer">${paper.title}</a>`;
        papersList.appendChild(listItem);
    });
}
// Initialize the General Notes section when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadQuestionPapers();
});