async function startCam() {
    const cam = document.getElementById("cam");
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cam.srcObject = stream;
}
startCam();
