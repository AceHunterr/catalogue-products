// const csv = `Handle,Title,Vendor,product_category,Tags,Size,Color,img_src,Price
// walkoutwear-streight-fit-premium-cargo,Walkoutwear Streight Fit Premium Cargo,WALKOUTWEAR,Apparel & Accessories > Clothing > Pants,"cargo, New Arrival",M,Green,,2899
// walkoutwear-streight-fit-premium-cargo,,,,"",M,Grey,,2899
// walkoutwear-streight-fit-premium-cargo,,,,"",L,Green,,2899
// walkoutwear-streight-fit-premium-cargo,,,,"",L,Grey,,2899
// walkoutwear-streight-fit-premium-cargo,,,,"",XL,Green,,2899
// walkoutwear-streight-fit-premium-cargo,,,,"",XL,Grey,,2899
// walkoutwear-streight-fit-premium-cargo,,,,"",XXL,Green,,2899
// walkoutwear-streight-fit-premium-cargo,,,,"",XXL,Grey,,2899
// walkoutwear-premium-in-contrast-convertible-cargo,Walkoutwear Premium In Contrast Convertible Cargo,WALKOUTWEAR,Apparel & Accessories > Clothing > Pants,"cargo, New Arrival",M,Green,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1674018169061.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",M,Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1674018169078.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",M,Dark Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1672232094348.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",L,Green,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1672232094362.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",L,Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1672232094382.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",L,Dark Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1672232094396.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",XL,Green,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1674018169095.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",XL,Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1674018169069.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",XL,Dark Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/1674018169085.jpg?v=1683609728,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",XXL,Green,,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",XXL,Grey,,2899
// walkoutwear-premium-in-contrast-convertible-cargo,,,,"",XXL,Dark Grey,,2899
// walkoutwear-premium-baggy-style-6-pocket-cargo,Walkoutwear Premium Baggy Style 6 Pocket Cargo,WALKOUTWEAR,Apparel & Accessories > Clothing > Pants,"cargo, New Arrival",M,Sky-Blue,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/IMG_3496.jpg?v=1683609186,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",M,Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/IMG_3498.jpg?v=1683609186,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",M,Light-Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/IMG_3500.jpg?v=1683609186,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",M,Camel,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/IMG_3502.jpg?v=1683609186,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",L,Sky-Blue,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/IMG_3495.jpg?v=1683609153,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",L,Grey,https://cdn.shopify.com/s/files/1/0581/4350/6626/files/IMG_3499.jpg?v=1683609153,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",L,Light-Grey,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",L,Camel,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XL,Sky-Blue,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XL,Grey,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XL,Light-Grey,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XL,Camel,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XXL,Sky-Blue,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XXL,Grey,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XXL,Light-Grey,,2499
// walkoutwear-premium-baggy-style-6-pocket-cargo,,,,"",XXL,Camel,,2499`;


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