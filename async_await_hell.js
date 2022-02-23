const { rejects } = require("assert");
const { resolve } = require("path/posix");
const { resourceLimits } = require("worker_threads");

function download(url, time) {
    return new Promise((resolve, reject) => {
        if (!url.startsWith('http')) {
            console.log("Downloading start")
            setTimeout(() => {
                console.log("Downloading over")
            }, time)

        } else {
         
        }
    });
}
function compress(file, time) {
    return new Promise((resolve, reject) => {


    })
}
function upload() {
    console.log("Upload");
}

function setTime(time) {
    setTimeout(() => {

    }, time);
}

async function task() {
    try {
        await
            download("httpss/ram.com/image.jpg", 2000);
    } catch (err) {
        console.log("Rejected", err)
    }
}
task();