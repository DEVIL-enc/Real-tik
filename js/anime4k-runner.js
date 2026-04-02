async function runAnime4K(inputFile) {

    console.log("Anime4K Ultra enhancement started");

    await ffmpeg.run(
        "-i", inputFile,
        "-vf",
        "scale=iw*1.2:ih*1.2:flags=lanczos,unsharp=5:5:1.0:3:3:0.5",
        "anime4k_temp.mp4"
    );

    ffmpeg.FS("rename","anime4k_temp.mp4",inputFile);

    console.log("Anime4K enhancement finished");

}
