#### I added some CSS styling for good measure.

![sc](https://i.imgur.com/uz2orjZ.png)

## Functions that are most interesting to you:

- Can be found in the parser.js file
- sortData(stages, ops) - sorts the opportunities into the object containing arrays with OppStageID being a key to each array. This is needed to generate the table. Otherwise we can't get data in rows, only columns.
- tableGenerator(stages, ops)

### Less interesting

- copyCell(e) - when a cell containing text is clicked that text is copied
- fallbackCopyTextToClipboard(text) - a fallback to still be able to copy text on older browsers
- showNotification(bool) - it notifies about the outcome of the above functions through a little modal, that fades out after 0.5s (with a cool css animation)

## Data used

I've taken data from your tables, downloaded it in a .csv format, converted to .json and used.
