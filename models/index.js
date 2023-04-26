const fs = require('fs');
const path = require('path');
const minimist = require("minimist");
require("dotenv").config();

const { createAdminApiClient } = require("@builder.io/admin-sdk");

const getAdminClient = async () => {
  return createAdminApiClient(process.env.BUILDER_PRIVATE_KEY);
};


const directoryPath = path.join(__dirname, 'seeds');

const loadSeedJsonFile = (filename) => {
    return new Promise((resolve, reject) => {
        const path = `./seeds/${filename}.json`;
        try {
            fs.readFile(path, "utf8", function(err, data) {
                if (err) {
                    reject(err);
                    return
                }
                obj = JSON.parse(data);
                resolve(obj);
            })

        } catch (error) {
            reject(error);
        }
    });
};

const loadAllJsonFiles = () => {
    return new Promise((resolve, reject) => {
        try {
            fs.readdir(directoryPath, function (err, files) {
                //handling error
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                } 
                //listing all files using forEach
                const allFiles = [];
                files.forEach(function (file) {
                    // Do whatever you want to do with the file
                     allFiles.push(file.slice(0, file.length-5));
                    //  console.log(allFiles)
                     resolve(allFiles);
                });
            });
        } catch (error) {
            reject(error)
        } 
    });
}

const runMigrationFiles = async (files) => {
    const client = await getAdminClient();
    for (const filename of files) {
        try {
            const file = await loadSeedJsonFile(filename);
            await client.chain.mutation
                .addModel({
                body: file,
            })
            .execute({ id: true, name: true });
            
        } catch (err) {
            console.error(err)
        }
    }
};

const runAllMigrationFiles = async () => {
    const files = await loadAllJsonFiles();
    console.log(files)
    runMigrationFiles(files);
}

(async () => {
    const argv = minimist(process.argv.slice(2));
    const { all, file, files} = argv;
    // console.log(all)
    if (!all && !file && !files) {
        console.info(`
            Usage: node ./index.js [options]

            Options:
            --all
                run all seed files
            --file=filename            run specific file                           
            --F=filename1,filename2    run specific files

            Examples:
            node ./index --all 
            node ./index --file=file1 --file=file2 
            node ./index --files=file1,file2
        `);
    } else {
        if (all) {
            runAllMigrationFiles();
        }
        if (file) {
            if (typeof file ===  "string") {
                runMigrationFiles([file]);
                return;
            }
            else {
                runMigrationFiles(file);
                return;
            }
        }
    }
})();