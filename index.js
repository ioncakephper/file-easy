const path = require('path')
const fs = require('fs')


/**
 * Save content in a file using utf8 format.
 *
 * @param {string} filename The filename to create. It can also include a path ending with the filename. Path will be created if not exists.
 * @param {string} content The content to place in the file.
 * @throws {Error} If input is invalid or if there was an error during the save process.
 */
function saveDocument(filename, content) {
    // Validate inputs
    if (typeof filename !== 'string' || typeof content !== 'string') {
        throw new Error('Invalid input: `filename` and `content` must be strings.');
    }

    // Check if filename contains invalid characters
    const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g;
    if (invalidChars.test(path.basename(filename))) {
        throw new Error('Invalid filename: contains prohibited characters.');
    }

    // Ensure the filename is an absolute path
    if (!path.isAbsolute(filename)) {
        filename = path.resolve(filename);
    }

    // Create directory if it doesn't exist
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Write content to file
    fs.writeFileSync(filename, content, 'utf8');
}

/**
 * Append specified extension if needed.
 *
 * @param {string} filename The filename to check for an existing extension.
 * @param {string} extension The extension to append if filename has no extension. It should start with a dot (e.g. `.txt`)
 * @returns {string} filename with either existing or specified extension
 * @throws {TypeError} If filename or extension is not a string.
 * @throws {Error} If extension is empty or doesn't start with a dot.
 */
function setDefaultExtension(filename, extension) {
    // Validate inputs
    const validExtensionPattern = /^\.[a-zA-Z0-9]+$/;
    if (typeof filename !== 'string') {
        throw new TypeError('Invalid input: `filename` must be a string.');
    }
    if (typeof extension !== 'string') {
        throw new TypeError('Invalid input: `extension` must be a string.');
    }
    if (filename.trim() === '') {
        throw new Error('Invalid input: `filename` cannot be empty.');
    }

    // Validate extension
    if (!validExtensionPattern.test(extension)) {
        throw new Error('Invalid extension: must start with a dot and contain only alphanumeric characters.');
    }

    // Return filename with existing extension, or append the specified extension
    if (path.extname(filename)) {
        return filename;
    }

    return `${filename}${extension}`;
}

/**
 * Convert a string into an identifier.
 *
 * @param {string} s The string to convert.
 * @returns {string} The identifier string.
 *
 * The following operations are performed on the string:
 * 1. Trim and convert to lower case.
 * 2. Remove diacritics (transliterate or remove non-ASCII characters).
 * 3. Replace spaces and special characters with hyphens, allowing underscores.
 * 4. Replace multiple hyphens with a single hyphen.
 * 5. Remove leading and trailing hyphens.
 */
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
    saveDocument,
    setDefaultExtension,
    slug,
}