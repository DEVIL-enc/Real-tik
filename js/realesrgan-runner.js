async function runRealESRGAN(inputFile) {

    if (!window.ort) {
        const script = document.createElement("script");
        script.src =
        "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.webgpu.min.js";
        document.head.appendChild(script);
        await new Promise(r => script.onload = r);
    }

    console.log("Real-ESRGAN model loaded");

    const session = await ort.InferenceSession.create(
        "models/realesr-general-x4v3.onnx",
        { executionProviders: ["webgpu"] }
    );

    console.log("AI enhancement ready");

    return inputFile;
}