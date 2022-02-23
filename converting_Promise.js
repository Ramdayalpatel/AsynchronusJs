
function download(url) {
    return new Promise((resolve, reject) => {
        console.log(`Downloading From ${url}`);
        if (!url.startsWith("https")) {
            return reject(new Error('URL must be start with http '));
        }
        setTimeout(() => {
            let saveFile = url.split('/').pop();
            console.log(`Downloading Over  and save as ${saveFile}`);
            return resolve(saveFile);
        }, 3000);
    })
}
function compress(file, farmat) {
    return new Promise((resolve, reject) => {
        console.log(`Compressing "${file}"`);
        if (['zip', 'gzip', '7z'].indexOf(farmat === -1)) {
            return reject(new Error("We can only support zip and gzip and 7z"));
        }
        setTimeout(() => {
            let archive = file.split('.')[0] + '.' + farmat;
            console.log(`Compressed and saves as ${archive}`)
            resolve(archive);
        }, 2000);
    })
}
function upload(server, file) {
    return new Promise((resolve, reject) => {
        console.log(`Uploading "${file}" to ${server}`);
        if (!server.startsWith("ftp//:")) {
            return reject(new Error("we can only upload to FTP Serevr"));
        }
        setTimeout(() => {
            let remotepath = `${server}/${file}`;
            console.log(`Uploaded to ${remotepath}`);
            resolve(remotepath);

        }, 1000);

    })
}

download("https://thumbs.dreamstime.com/196874539.jpg")
    .catch((err) => console.error("Error Downloding the file"))

    .then((file) => compress(file, 'zip'))

    .catch((err) => console.error("Error compressing the file"))


    .then((archive) => upload("ftp://file.com", archive))


    .catch((err) => console.log(err))