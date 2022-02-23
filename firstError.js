const fs = require("fs");
const { arch } = require("os");
const { argv } = require("process");

function download(url, downloaded) {
    // const file = __dirname + "/info.txt";
    // let filelocation = fs.readFile(file, "utf8", function (err, data) {

    //     console.log("Downloading start !");

    //     setTimeout(() => {
    //         try {

    //             let num1 = 10 / 0;
    //             console.log("Download Over", data);

    //         } catch (err) {
    //             if (err.fileNotFound) {
    //                 console.log("File Not found", err);
    //             }
    //         } finally {
    //             console.log("Connection close");
    //         }
    //     }, 3000);

    // })

    console.log(`Downloading From ${url}`);
    if (!url.startsWith("http")) {
        download(new Error('URL must be start with http '));
    }
    setTimeout(() => {
        let saveFile = url.split('/').pop();
        console.log(`Downloading Over  and save as ${saveFile}`);
        return downloaded(null, saveFile);
    }, 3000);

}


function compress(file, farmat, compressed) {
    console.log(`Compressing ${file}`);
    if (['zip', 'gzip', '7z'].indexOf(farmat === -1)) {
        // console.log("Zip file only");
        compressed(new Error("we can only  support zip gzip and 7z"));
    }
    setTimeout(() => {
        let archive = file.split('.')[0] + '.' + farmat;
        console.log(`Compressed and save as ${archive}`);
        return compressed(archive);
    }, 2000);

}
function upload(server, file, uploaded) {
    console.log(`Uploading ${file} to ${server}`);
    if (server.startsWith("ftp://")) {
        //  console.log("we can only upload to FTP servers");
        uploaded(new Error("We can only upload to FTP server "));
    }
    setTimeout(() => {
        let remotepath = `${server}/${file}`;
        console.log(`Uploaded to ${remotepath}`);
        return uploaded(remotepath);
    }, 1000);
}

download('http://something.com/path/image.jpg', (err, file) => {
    if (err) throw err
    compress(file, 'zip', (archive) => {
        if (err) throw err
        upload('http://file.com', archive, () => { })
        if (err) throw err
    })
});

// task1(arg, (err, data1) => {
//     task2(arg2, (err, data2) => {
//         task3(arg3, (err, data3) => {

//         })

//     })
// })