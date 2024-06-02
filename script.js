// Example data, replace with actual extracted data
const regions = ["United States"];
const industries = ["Healthcare", "Financial", "Pharmaceuticals", "Energy", "Industrial"];
const companySizes = ["1,001–5,000 employees"];

// Populate drop-down options
document.getElementById('region').innerHTML = regions.map(region => `<option value="${region}">${region}</option>`).join('');
document.getElementById('industry').innerHTML = industries.map(industry => `<option value="${industry}">${industry}</option>`).join('');
document.getElementById('company-size').innerHTML = companySizes.map(size => `<option value="${size}">${size}</option>`).join('');

// Calculation logic
function calculateROI() {
    const region = document.getElementById('region').value;
    const industry = document.getElementById('industry').value;
    const companySize = document.getElementById('company-size').value;
    const days = parseInt(document.getElementById('days').value, 10);

    // Example calculation, replace with actual logic
    const baseRisk = 100000;  // Replace with actual base risk value
    const decayConstant = 0.01;  // Replace with actual decay constant
    const breachCost = 4450000;  // Replace with actual breach cost for the selected industry

    const monetaryRisk = baseRisk * Math.exp(decayConstant * days);

    document.getElementById('result').innerText = `Estimated Monetary Risk: $${monetaryRisk.toFixed(2)}`;
}
