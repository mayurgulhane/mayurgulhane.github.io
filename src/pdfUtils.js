import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const downloadPDF = () => {
    const input = document.getElementById('cv-container');
    if (!input) {
        console.error("Element with ID 'cv-container' not found.");
        return;
    }

    html2canvas(input, {
        scale: 3,  // Increase the scale for better resolution
    }).then((canvas) => {
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // Adjust the width based on your layout
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 30, imgWidth, imgHeight); // Adjust the margins

        pdf.save('Mayur_Gulhane_CV.pdf');
    });
};

export default downloadPDF;
