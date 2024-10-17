function calculate() {
    let pie = 3.142;
    let radius = document.getElementById("radius").value;
    radius = parseFloat(radius); // Convert to a number

    let circumference = (2 * pie * radius);
    // Area calculation
    let area = (pie * radius * radius); 

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <strong>The circumference is:</strong> ${circumference.toFixed(2)}<br/>
        <strong>The area is:</strong> ${area.toFixed(2)}<br/>
    `;
}