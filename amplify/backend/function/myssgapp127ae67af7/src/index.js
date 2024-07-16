const { exec } = require('child_process');
const path = require('path');

exports.handler = async (event) => {
    return new Promise((resolve, reject) => {
        const scriptPath = path.join(__dirname, '../../../../../scripts/add_articles.ts');
        exec(`npx ts-node ${scriptPath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing script: ${error}`);
                reject({
                    statusCode: 500,
                    body: `Error executing script: ${stderr}`
                });
            } else {
                console.log(`Script output: ${stdout}`);
                resolve({
                    statusCode: 200,
                    body: `Script executed successfully: ${stdout}`
                });
            }
        });
    });
};