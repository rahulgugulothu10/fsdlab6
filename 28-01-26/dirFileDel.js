const fs = require("fs");

fs.mkdir("myDir", (err) => {
    if (err) throw err;
    console.log("Directory is Created!");

    fs.writeFile("myDir/file.txt", "This is a file under the created directory!", (err) => {
        if (err) throw err;
        console.log("File is created!");

        fs.unlink("myDir/file.txt", (err) => {
            if (err) throw err;
            console.log("File deleted successfully!");
        });
    });
});

