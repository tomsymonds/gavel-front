//Returns an object containing objects grouped by date, each with a key for the date
//Assumes items are being grouped by an attribute called date
const dateGroup = (items) => {
    const groupedItems = items.reduce((map, i) => ({
        ...map,
        [i.attributes.date]: [...(map[i.attributes.date] ?? []), i]
      }), {});
      
    return groupedItems
}

export default dateGroup