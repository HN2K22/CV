document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("download-pdf").addEventListener("click", () => {
    const element = document.getElementById("content");
    const options = {
      filename: "GFG.pdf",
      margin: 0,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  });
});
