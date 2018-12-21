let fs = require('fs');

const view = (templateName, values, response) => {
    try {
        // Read from the template file
        const fileContents = fs.readFileSync(`./views/${templateName}.html`, {
            encoding: "utf8";
        });

        if (values === null) {
            return response.write(fileContents);
        }
        const resultString = values.map(value => {
            return `<li>${value}</li>`;
        })
        const content = fileContents.replace("{{" + 'sentence' + "}}", resultString.join(' '));
        return response.write(content);
    } catch (error) {
        console.log('error', error);
    }
}
module.exports.view = view;
