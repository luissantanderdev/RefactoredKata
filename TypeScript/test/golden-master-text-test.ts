import { Item, GildedRose } from '../app/gilded-rose';



function runTestSimulation(days: number = 2): Array<Item> {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6)
  ];

  const gildedRose: GildedRose = new GildedRose(items);

  if (process.argv.length > 2) {
      days = +process.argv[2];
  }
  
  for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
      console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
  
    });
    console.log();
    gildedRose.updateQuality();
  }

  return items; 
}

export default runTestSimulation; 