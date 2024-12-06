const { slug, setDefaultExtension, saveDocument } = require('./index'); // Adjust path if necessary
const fs = require('fs');
const path = require('path');


describe('slug', () => {
    it('should convert a string to a slug', () => {
        expect(slug('Hello World')).toBe('hello-world');
        expect(slug(' This is a test  ')).toBe('this-is-a-test');
        expect(slug('My first title!!')).toBe('my-first-title');
        expect(slug('String with special characters: $%^&*')).toBe('string-with-special-characters');
        expect(slug('Multiple    spaces')).toBe('multiple-spaces');
        expect(slug('-Dashes-at-the-beginning-and-end-')).toBe('dashes-at-the-beginning-and-end');
        expect(slug('___Multiple underscores___')).toBe("___multiple-underscores___");
        expect(slug('Uppercase and Lowercase')).toBe('uppercase-and-lowercase');
        expect(slug('123 Numbers and Text')).toBe('123-numbers-and-text');
        expect(slug('International characters: üöä')).toBe('international-characters-uoa');
    });

    it('should handle edge cases', () => {
        expect(slug('')).toBe('');
        expect(slug('~!@#$%^&*()+=-')).toBe(''); // All special characters
        expect(slug('    ')).toBe('');  // Only whitespace
    });

    it('should throw an error for invalid input', () => {
        expect(() => slug(123)).toThrow(TypeError);
    });

});




describe('setDefaultExtension', () => {

    it('should return filename with default extension', () => {

        expect(setDefaultExtension('myfile', '.md')).toBe('myfile.md');
    });



    it('should return filename with existing extension', () => {

        expect(setDefaultExtension('myfile.txt', '.md')).toBe('myfile.txt');

    });

});


describe('saveDocument', () => {
    const testDir = './test_output';
    const testFile = path.join(testDir, 'test.txt');

    afterEach(() => {
        try {
            fs.rmSync(testDir, { recursive: true, force: true });
        } catch (e) {
            // Ignore errors, the directory might not exist
        }
    });

    it('should create file with content', () => {
        const content = 'Test content';
        saveDocument(testFile, content);
        expect(fs.existsSync(testFile)).toBe(true);
        expect(fs.readFileSync(testFile, 'utf8')).toBe(content);
    });

    it('should create nested directories and file', () => {
        const nestedFile = path.join(testDir, 'nested', 'deeply', 'test.txt');
        const content = 'Nested test content';
        saveDocument(nestedFile, content);
        expect(fs.existsSync(nestedFile)).toBe(true);
        expect(fs.readFileSync(nestedFile, 'utf8')).toBe(content);
    });

    it('should handle empty content', () => {
        const content = '';
        saveDocument(testFile, content);
        expect(fs.existsSync(testFile)).toBe(true);
        expect(fs.readFileSync(testFile, 'utf8')).toBe(content);
    });

    it('should overwrite existing file', () => {
        const initialContent = 'Initial content';
        const newContent = 'New content';
        saveDocument(testFile, initialContent);
        saveDocument(testFile, newContent);
        expect(fs.readFileSync(testFile, 'utf8')).toBe(newContent);
    });

    it('should handle large content', () => {
        const largeContent = 'a'.repeat(10 * 1024 * 1024); // 10 MB of 'a'
        saveDocument(testFile, largeContent);
        expect(fs.existsSync(testFile)).toBe(true);
        expect(fs.readFileSync(testFile, 'utf8')).toBe(largeContent);
    });

    it('should throw error for non-string content', () => {
        const nonStringContent = 12345;
        expect(() => saveDocument(testFile, nonStringContent)).toThrow('Invalid input: `filename` and `content` must be strings.');
    });

    it('should throw error for invalid filename', () => {
        const invalidFile = path.join(testDir, 'invalid<>file.txt');
        const content = 'Content';
        expect(() => saveDocument(invalidFile, content)).toThrow('Invalid filename: contains prohibited characters.');
    });
});


