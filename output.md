## Functions

<dl>
<dt><a href="#saveDocument">saveDocument(filename, content)</a></dt>
<dd><p>Save content in a file using utf8 format.</p>
</dd>
<dt><a href="#setDefaultExtension">setDefaultExtension(filename, extension)</a> ⇒ <code>string</code></dt>
<dd><p>Append specified extension if needed.</p>
</dd>
<dt><a href="#slug">slug(s)</a> ⇒ <code>string</code></dt>
<dd><p>Convert a string into an identifier.</p>
</dd>
</dl>

<a name="saveDocument"></a>

## saveDocument(filename, content)
Save content in a file using utf8 format.

**Kind**: global function  
**Throws**:

- <code>Error</code> If input is invalid or if there was an error during the save process.


| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | The filename to create. It can also include a path ending with the filename. Path will be created if not exists. |
| content | <code>string</code> | The content to place in the file. |

<a name="setDefaultExtension"></a>

## setDefaultExtension(filename, extension) ⇒ <code>string</code>
Append specified extension if needed.

**Kind**: global function  
**Returns**: <code>string</code> - filename with either existing or specified extension  
**Throws**:

- <code>TypeError</code> If filename or extension is not a string.
- <code>Error</code> If extension is empty or doesn't start with a dot.


| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | The filename to check for an existing extension. |
| extension | <code>string</code> | The extension to append if filename has no extension. It should start with a dot (e.g. `.txt`) |

<a name="slug"></a>

## slug(s) ⇒ <code>string</code>
Convert a string into an identifier.

**Kind**: global function  
**Returns**: <code>string</code> - The identifier string.The following operations are performed on the string:1. Trim and convert to lower case.2. Remove diacritics (transliterate or remove non-ASCII characters).3. Replace spaces and special characters with hyphens, allowing underscores.4. Replace multiple hyphens with a single hyphen.5. Remove leading and trailing hyphens.  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | The string to convert. |

