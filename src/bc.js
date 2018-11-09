const {spawnSync} = require('child_process');

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
    const process = spawnSync('bc', {input: 'scale=2; ' + expression + '\n'});
    const error = process.stderr.toString();
    
    if (error) {
        console.error('Invalid expression: ' + expression);
        console.error(error);
        return 'invalid expression';
    }

    const result = process.stdout.toString().trim();
    const parsed = Number(result);

    if (Number.isNaN(parsed)) {
        return result;
    }

    return parsed;
}
