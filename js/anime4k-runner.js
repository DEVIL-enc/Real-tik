async function runAnime4K(inputFile) {

    console.log("Anime4K balanced enhancement started");

    await ffmpeg.run(
        "-i", inputFile,
        "-vf",
        "scale=iw*1.05:ih*1.05:flags=lanczos,unsharp=3:3:0.4:2:2:0.2",
        "anime4k_temp.mp4"
    );

    ffmpeg.FS("rename","anime4k_temp.mp4",inputFile);

    console.log("Anime4K balanced enhancement finished");

}
