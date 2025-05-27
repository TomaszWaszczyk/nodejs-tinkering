
var items = [
  { name: 'item 1' },
  { name: 'item 2' },
  { name: 'item 11' },
  { name: 'item 3' },
  { name: 'item 10' }
];


function getItemsMaxNumber(items) {
    let maxNumber = 0;
    
    for (let item of items) {
        // Extract number from the 'name' string using regex
        const match = item.name.match(/\d+/);
        if (match) {
            const number = parseInt(match[0]);
            if (number > maxNumber) {
                maxNumber = number;
            }
        }else {
          maxNumber = 0;
        }
    }
    console.log(`The biggest number is: ${maxNumber}`);
    return maxNumber;
}

getItemsMaxNumber(items);
