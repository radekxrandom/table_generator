#### I added some CSS styling for the good measure.

![sc](https://i.imgur.com/uz2orjZ.png)

## Functions that are most interesting to you:

- Can be found in parser.js file
- sortData(stages, ops) - sorts opportunities in2 object containing arrays with OppStageID being key to each array. This is needed to generate table. Otherwise we can get data in column form and not in row form.
- tableGenerator(stages, ops)

### Less interesting

- copyCell(e) - when cell containing text is clicked that text is copied
- fallbackCopyTextToClipboard(text) - fallback to still be able to copy text on older browsers
- showNotification(bool) - notifies about the outcome of above functions through little modal, fades out after 0.5s (with cool css animation)

## Data used

I've taken data from your tables, downloaded it in .csv format, converted to .json and used.
