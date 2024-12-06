# file-easy

File utilities to speed up creating document files, setting default extension, and getting a `slug` from a string.  `file-easy` provides a simple, lightweight, and easy-to-use set of functions for common file-related tasks. If you're tired of writing boilerplate code for handling filenames, creating text files, or generating URL-friendly slugs, `file-easy` simplifies these operations so you can focus on your core application logic. It's particularly well-suited for projects that frequently handle text files or need to sanitize filenames for web use.  No more complex regex or manual string manipulation – just clean, efficient file handling.

[![npm](https://img.shields.io/npm/v/file-easy.svg)](https://www.npmjs.com/package/file-easy)
[![npm](https://img.shields.io/npm/dm/file-easy.svg)](https://www.npmjs.com/package/file-easy)
[![License](https://img.shields.io/badge/license-MIT-green)](license)
[![Build Status](https://github.com/ioncakephper/file-easy/actions/workflows/node.js.yml/badge.svg)](https://github.com/ioncakephper/file-easy/actions/workflows/node.js.yml)
[![njsscan sarif](https://github.com/ioncakephper/file-easy/actions/workflows/njsscan.yml/badge.svg)](https://github.com/ioncakephper/file-easy/actions/workflows/njsscan.yml)
[![Node.js CI](https://github.com/ioncakephper/file-easy/actions/workflows/node.js.yml/badge.svg)](https://github.com/ioncakephper/file-easy/actions/workflows/node.js.yml)
[![CodeQL Advanced](https://github.com/ioncakephper/file-easy/actions/workflows/codeql.yml/badge.svg)](https://github.com/ioncakephper/file-easy/actions/workflows/codeql.yml)
[![DeepScan grade](https://deepscan.io/api/teams/15501/projects/18710/branches/463828/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=15501&pid=18710&bid=463828)

## Installation

```bash
npm i file-easy
```

## Usage

### `.slug()`

```javascript
const fileEasy = require('file-easy')

// getting a slug
let fn = 'source Filename';
let slug = fileEasy.slug(fn)
console.log('Slug:', slug)
```

Will show:

```bash
Slug: source-filename
```

```javascript
const fileEasy = require('file-easy')

let names = [
    'Simple_File$Goes%Here',
    '%%Welcome**    Buddy%&^#$%'
];
names.forEach((name) => {
    console.log('Source: "', name, '" is:', fileEasy.slug(name))
})
```

Will show:

```bash
Source: " Simple_File$Goes%Here " is: " simple-file-goes-here
Source: " %%Welcome**    Buddy%&^#$% " is: " welcome-buddy
```

### `.setDefaultExtension()`

```javascript
const fileEasy = require('file-easy')

// f1 is filename.js (no extension in original, apply extension)
let f1 = fileEasy.setDefaultExtension('filename', '.js)

// f2 is filename.js (extension already exists)
let f2 = fileEasy.setDefaultExtension('filename.js', '.json')

// f3 is filename. (extension starts with . in original)
let f3 = fileEasy.setDefaultExtension('filename.', '.js')
```

### `.saveDocument()`

```javascript
const fileEasy = require('file-easy')

let filename = './docs/sample.txt'
let content = 'String to go in'

/**
 * Creates the `sample.txt` file in `./docs` folder
 * If path does not exist, it will create it (e.g. `./docs`)
 * The file is saved as a utf-8 format (standard format)
 */
fileEasy.saveDocument(filename, content)
```

## Functions

<dl>
<dt><a href="#setDefaultExtension">setDefaultExtension(filename, extension)</a> ⇒ <code>string</code></dt>
<dd><p>Append specified extension if needed.</p>
</dd>
<dt><a href="#saveDocument">saveDocument(filename, content)</a></dt>
<dd><p>Save content in a file using utf8 format.</p>
</dd>
<dt><a href="#slug">slug(s)</a> ⇒ <code>string</code></dt>
<dd><p>Convert a string into an identifier.</p>
</dd>
</dl>

<a name="setDefaultExtension"></a>

## setDefaultExtension(filename, extension) ⇒ <code>string</code>
Append specified extension if needed.

**Kind**: global function
**Returns**: <code>string</code> - filename with either existing or specified extension

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | the filename to check for an existing extension. |
| extension | <code>string</code> | the extension to append if filename has no extension. It should start with a dot (e.g. `.txt`) |

<a name="saveDocument"></a>

## saveDocument(filename, content)
Save content in a file using utf8 format.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | The filename to create. It can also include a path ending with the filename. Path will be created if not exists. |
| content | <code>string</code> | The content to place in the file. |

<a name="slug"></a>

## slug(s) ⇒ <code>string</code>
Convert a string into an identifier.

**Kind**: global function
**Returns**: <code>string</code> - The identifier string

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | The string to convert by replacing special characters with dash (-) |
