let fs = require('fs');

const view = (templateName, values, response) => {
    try {
        // Read from the template file
        const fileContents = fs.readFileSync(`./views/${templateName}.html`, {
            encoding: "utf8"
        });

        if (values === null) {
            return response.write(fileContents);
        }
        const content = fileContents.replace("{{" + 'sentence' + "}}", values);
        return response.write(content);
    } catch (error) {
        console.log('error', error)
    }
}
module.exports.view = view;