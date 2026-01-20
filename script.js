// ============================================
// EDIT THIS SECTION TO ADD YOUR UNITS AND PDFS
// ============================================
// 
// To change a unit name: Edit the "name" property (e.g., "Unit 1" → "Mathematics 101")
// To add/edit PDFs: Modify the "pdfs" array below each unit
//   - "name": The display name shown on the website
//   - "file": The path to your PDF file (must match the actual file location)
//
// Example:
//   unit1: {
//       name: "Mathematics 101",                    ← Change unit name here
//       pdfs: [
//           { name: "Lecture 1", file: "units/unit1/lecture1.pdf" },    ← Add/edit PDFs here
//           { name: "Lecture 2", file: "units/unit1/lecture2.pdf" }
//       ]
//   }

const unitsData = {
    unit1: {
        name: "Internet Of Things",  // ← Change this to your unit name
        pdfs: [
            { name: "Introduction to Internet Of Things", file: "units/unit1/intro-to-internet-of-things.pdf" },
            { name: "Introduction to Internet Of Things Powerpoint", file: "units/unit1/intro-to-internet-of-things-powerpoint.pdf" },
            { name: "IOT Ecosystem", file: "units/unit1/iot-ecosystem.pdf" },
            { name: "Implications of IOT", file: "units/unit1/implications-of-iot.pdf" },
            { name: "Wireless Sensor Networks", file: "units/unit1/wireless-sensors-network.pdf" },
            { name: "Wireless Sensor Networks Powerpoint", file: "units/unit1/wireless-sensor-networks-powerpoint.pdf" },
            { name: "Further Readings on Sensors", file: "units/unit1/further-readings-on-sensors.pdf" },
            { name: "Wireless Technologies", file: "units/unit1/wireless-technologies.pdf" },
            { name: "IOT communication Technologies", file: "units/unit1/iot-communication-technologies.pdf" },
            { name: "Edge, Fog Connectivity and Protocols", file: "units/unit1/edge-connectivity-and-rotocols.pdf" },
            { name: "Signal Processing", file: "units/unit1/signal-processing.pdf" },
            { name: "Extra Readings", file: "units/unit1/extra-readings.pdf" },
            { name: "Data Analytics", file: "units/unit1/data-analytics.pdf" },
            { name: "Legal Challenges in IOT", file: "units/unit1/legal-challenges-in-iot.pdf" },
            // ← Add more PDFs here by copying the format above
        ]
    },
    unit2: {
        name: "Information Systems Audit",  // ← Change this to your unit name
        pdfs: [
            { name: "Full Notes 'possibly'", file: "units/unit2/information-systems-audit-complete.pdf" },
            // ← Add more PDFs here
        ]
    },
    unit3: {
        name: "Principles of Management",  // ← Change this to your unit name
        pdfs: [
            { name: "Full Notes 'possibly'", file: "units/unit3/principles-of-management.pdf" },
            // ← Add more PDFs here
        ]
    },
    unit4: {
        name: "Software Development and Management (pdfs not in order)",  // ← Change this to your unit name
        pdfs: [
            { name: "Study Notes 1", file: "units/unit4/material1.pdf" },
            { name: "Study Notes 2 might be a duplicate of Study Notes 1", file: "units/unit4/material2.pdf" },
            { name: "Study Notes 3", file: "units/unit4/material3.pdf" },
            { name: "Study Notes 4", file: "units/unit4/material4.pdf" },
            { name: "Study Notes 5", file: "units/unit4/material5.pdf" },
            { name: "Study Notes 6", file: "units/unit4/material6.pdf" },
            { name: "Study Notes 7", file: "units/unit4/material7.pdf" },
            { name: "Study Notes 8", file: "units/unit4/material8.pdf" },
            { name: "Study Notes 9", file: "units/unit4/material9.pdf" },
            // ← Add more PDFs here
        ]
    },
    unit5: {
        name: "Big Data Analytics",  // ← Change this to your unit name
        pdfs: [
            { name: "Introduction to Big Data Analytics", file: "units/unit5/introduction-to-big-data-analytics.pdf" },
            // ← Add more PDFs here
        ]
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderUnits();
});

// Render all units
function renderUnits() {
    const unitsGrid = document.getElementById('units-grid');
    unitsGrid.innerHTML = '';

    Object.keys(unitsData).forEach((unitKey, index) => {
        const unit = unitsData[unitKey];
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.style.animationDelay = `${index * 0.1}s`;
        
        unitCard.innerHTML = `
            <span class="unit-number">${index + 1}</span>
            <div class="unit-name">${unit.name}</div>
            <div class="unit-count">${unit.pdfs.length} ${unit.pdfs.length === 1 ? 'PDF' : 'PDFs'}</div>
        `;

        unitCard.addEventListener('click', () => showPDFs(unitKey));
        unitsGrid.appendChild(unitCard);
    });
}

// Show PDFs for a specific unit
function showPDFs(unitKey) {
    const unit = unitsData[unitKey];
    const unitsGrid = document.getElementById('units-grid');
    const pdfsView = document.getElementById('pdfs-view');
    const unitTitle = document.getElementById('unit-title');
    const pdfsList = document.getElementById('pdfs-list');

    // Hide units grid and show PDFs view
    unitsGrid.style.display = 'none';
    pdfsView.classList.remove('hidden');
    unitTitle.textContent = unit.name;
    pdfsList.innerHTML = '';

    // Render PDFs
    unit.pdfs.forEach((pdf, index) => {
        const pdfCard = document.createElement('div');
        pdfCard.className = 'pdf-card';
        pdfCard.style.animationDelay = `${index * 0.1}s`;
        
        pdfCard.innerHTML = `
            <span class="pdf-icon">📄</span>
            <div class="pdf-name">${pdf.name}</div>
            <a href="${pdf.file}" download class="download-btn">Download PDF</a>
        `;

        pdfsList.appendChild(pdfCard);
    });
}

// Back button functionality
document.getElementById('back-btn').addEventListener('click', function() {
    const unitsGrid = document.getElementById('units-grid');
    const pdfsView = document.getElementById('pdfs-view');
    
    unitsGrid.style.display = 'grid';
    pdfsView.classList.add('hidden');
});

