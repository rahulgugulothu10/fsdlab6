const fs = require("fs");

fs.mkdir("myDir", (err) => {
    if (err) throw err;
    console.log("Directory is created");

    fs.rmdir("myDir", (err) => {
        if (err) throw err;
        console.log("Directory is removed");
    });
});
