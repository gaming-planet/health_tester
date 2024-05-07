document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var bfp = calculateBFP(formData);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Hello, ${formData.get("name")}! nigger!!!!!!!!! Your Body Fat Percentage is ${bfp.toFixed(2)}%.`;
    resultDiv.style.display = "block";
});

function calculateBFP(formData) {
    var gender = formData.get("gender");
    var waist = parseFloat(formData.get("waist"));
    var neck = parseFloat(formData.get("neck"));
    var height = parseFloat(formData.get("height"));

    if (gender === "male") {
        return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else if (gender === "female") {
        return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
    } else {
        return null;
    }
}
