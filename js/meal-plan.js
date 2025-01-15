function readExcelFile(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        displayData(json);
    };
    reader.readAsArrayBuffer(file);
}

function displayData(data) {
    const container = document.getElementById('excel-data');
    data.forEach(row => {
        const div = document.createElement('div');
        div.textContent = JSON.stringify(row);
        container.appendChild(div);
    });
}

document.getElementById('upload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    readExcelFile(file);
});

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>
