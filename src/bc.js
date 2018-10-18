const {execSync} = require('child_process');

module.exports = {
    bc,
};


/**
 * @description
 * Runs the 'bc' shell command.
 * We call the bc command and get a string back.
 * We try to parse it to a number, but if it's a NaN, then
 * we just return the resulting buffer.
 * @param {string} expression - A math expression to evaluate
 */
function bc (expression) {
    const buffer = execSync('bc', {input: expression + '\n'});
    const result = buffer.toString().trim();
    const parsed = Number(result);
    if (Number.isNaN(parsed)) {
        return result;
    }
    return parsed;
}
