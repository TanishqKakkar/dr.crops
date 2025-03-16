document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("mainApp").classList.remove("hidden");
});

document.getElementById("imageInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("previewImage").src = e.target.result;
            document.getElementById("previewImage").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("checkDiseaseBtn").addEventListener("click", function () {
    document.getElementById("resultText").innerText = "✅ Image uploaded successfully! (Backend integration coming soon...)";
    
    // Show treatment suggestion button after checking disease
    document.getElementById("treatmentBtn").classList.remove("hidden");
});

document.getElementById("treatmentBtn").addEventListener("click", function () {
    alert("💊 Treatment suggestions will be available soon!");
});
