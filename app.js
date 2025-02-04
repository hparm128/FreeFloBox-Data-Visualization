console.log('Is this working?');

let viz;

// Tableau URL (use the actual share link)
const url = "https://public.tableau.com/views/FreeFloBoxsFreeMenstrualProducts/FreeFloBoxsStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

// Create a function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

// Run the initViz function when the page loads
document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');

// Click on the PDF button to generate a PDF of the dashboard
function generatePDF() {
    viz.showExportPDFDialog();
}

exportPDF.addEventListener("click", function () {
    generatePDF();
});

// Click on image to generate an image of the dashboard
function generateImage() {
    viz.showExportImageDialog();
}

exportImage.addEventListener("click", function () {
    generateImage();
});
