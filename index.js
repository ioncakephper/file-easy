const path = require('path')
const fs = require('fs')


/**
 * Append specified extension if needed.
 *
 * @param {string} filename the filename to check for an existing extension.
 * @param {string} extension the extension to append if filename has no extension. It should start with a dot (e.g. `.txt`)
 * @returns {string} filename with either existing or specified extension
 */
function setDefaultExtension(filename, extension) {
    return (path.extname(filename)) ? filename : filename + extension;
}

/**
 * Save content in a file using utf8 format.
 *
 * @param {string} filename The filename to create. It can also include a path ending with the filename. Path will be created if not exists.
 * @param {string} content The content to place in the file.
 */
function saveDocument(filename, content) {
    let d = path.dirname(filename);
    if (!fs.existsSync(d)) {
        fs.mkdirSync(d, { 'recursive': true })
    }
    fs.writeFileSync(filename, content, 'utf8')
}


function slug(s) {
    if (typeof s !== 'string') {
        throw new TypeError('Input must be a string');
    }

    s = s.trim().toLowerCase();

    // Transliterate or remove non-ASCII characters
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacritics

    // Replace spaces and special characters with hyphens, allowing underscores
    s = s.replace(/[^a-z0-9-_]+/g, '-');

    // Replace multiple hyphens with a single hyphen
    s = s.replace(/-+/g, '-');

    // Remove leading and trailing hyphens
    s = s.replace(/^-+|-+$/g, '');

    return s;
}



module.exports = {
    slug: slug,
    setDefaultExtension: setDefaultExtension,
    saveDocument: saveDocument
}