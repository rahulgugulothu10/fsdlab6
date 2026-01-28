const fs = require("fs");

fs.mkdir("myDir", (err) => {
    if (err) throw err;

    fs.writeFile("myDir/file.txt", "This is a file inside the directory!", (err) => {
        if (err) throw err;

        fs.unlink("myDir/file.txt", (err) => {
            if (err) throw err;

            fs.rmdir("myDir", (err) => {
                if (err) throw err;
                console.log("All operations completed successfully");
            });
        });
    });
});
