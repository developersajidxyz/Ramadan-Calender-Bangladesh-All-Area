  function generateTable(data) {
    const container = document.getElementById("table-container");
    container.innerHTML ="";
    const table = document.createElement("table");

    const tHead = table.createTHead();
    const rowHead = tHead.insertRow();

    // Define your columns here
    const columns = [
      "day",
      "date",
      "dayOfWeek",
      "sahriEnd",
      "fajrStart",
      "iftar",
    ];

    // Create the first row for the column headers
    for (let col of columns) {
      const th = document.createElement("th");
      th.innerHTML = data[0][col]; // Assumes the first object has your headers
      rowHead.appendChild(th).style.fontWeight = "bold";
    }

    // Add data to the table from the second object onwards
    for (let i = 1; i < data.length; i++) {
      const row = table.insertRow();
      for (let col of columns) {
        const cell = row.insertCell();
        cell.innerHTML = data[i][col];
      }
    }

    container.appendChild(table);
  }

  
  // DROPDOWN BUTTON CONTROL
  const locationToButtonIdMap = {
    'ঢাকা': 'dhakaBtn',
    'চট্টগ্রাম': 'chittagongBtn',
    'বরিশাল' : 'barisalBtn',
    'খুলনা': 'khulnaBtn',
    'রাজশাহী': 'rajshahiBtn', 
    'রংপুর' : 'rangpurBtn',
    'ময়মনসিংহ': 'mymensinghBtn',
    'সিলেট': 'sylhetBtn'
    // Add more mappings as necessary
  };
  
  function updateTableAndButton(locationName, data) {
    // Update Mainbtn text
    const mainBtn = document.querySelector('.Mainbtn');
    mainBtn.innerText = `${locationName} জেলা`;
    // Append SVG to mainBtn as innerText removes it
    mainBtn.innerHTML += `
      <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" fill="none" width="24" height="24"/>
        <g><path d="M7 10l5 5 5-5"/></g>
      </svg>
    `;
  
    // Hide previous selected button and show all others
    document.querySelectorAll('.dropdown button').forEach(button => {
      button.style.display = 'block';
    });
    const buttonId = locationToButtonIdMap[locationName]; // Use the map to get the correct button ID
    if (buttonId) {
      document.getElementById(buttonId).style.display = 'none';
    }
  
    // Generate table with the provided data
    generateTable(data);
  }
  
  // Initialize with default data for Dhaka
  document.addEventListener('DOMContentLoaded', function() {
    updateTableAndButton('ঢাকা', ramadanScheduleDhaka);
  });
  