const csv = require('./csv_data')

const rows = csv.split('\n');
const headers = rows[0].split(',');

const jsonData = [];

for (let i = 1; i < rows.length; i++) {
  const values = rows[i].split(',');

  const obj = {};
  for (let j = 0; j < headers.length; j++) {
    const header = headers[j].trim();
    const value = values[j].trim();

    if (header === 'Handle' || header === 'Title' || header === 'Vendor' || header === 'product_category'  || header === 'img_src'|| header === 'tag1'|| header === 'tag2'|| header === 'tag3') {
      obj[header] = value ? value : null;
    } 
    else if (header === 'Size' || header === 'Color' ) 
    {
      if (!obj[header]) obj[header] = [];
      if (value) obj[header].push(value);
    } 

    else if (header === 'Tags') {
        
        if (value) {
          obj[header] = value.split(',').map(tag => tag.trim());
        } else {
          obj[header] = [];
        }}
  
    else if (header === 'Price') {
      obj[header] = parseFloat(value);
    }
  }

  const existingIndex = jsonData.findIndex(item => item.Handle === obj.Handle);
  if (existingIndex !== -1) {
    const existingItem = jsonData[existingIndex];
    for (const key in obj) {
      if (key !== 'Handle' && key !== 'Title' && key !== 'Vendor' && key !== 'product_category' && key !== 'Tags' && key !== 'img_src'&& key !== 'tag1'&& key !== 'tag2'&& key !== 'tag3') {
        if (!existingItem[key]) existingItem[key] = [];
        if (obj[key].length > 0) existingItem[key].push(obj[key][0]);
      }
    }
  } else {
    jsonData.push(obj);
  }
}


// const final_jsonData = JSON.stringify(jsonData, null, 2)
// console.log(final_jsonData);
const fs = require('fs');

const final_jsonData = JSON.stringify(jsonData, null, 2);

fs.writeFile('data.json', final_jsonData, (err) => {
  if (err) {
    console.error('Error creating JSON file:', err);
    return;
  }
  console.log('JSON file created successfully.');
});