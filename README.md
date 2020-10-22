# file-utils




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

