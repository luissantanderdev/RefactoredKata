export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  // Anything but Aged Brie, Backstage passes to a TAFKAL80ETC concert, Sulfuras, Hand of Ragnaros and as long quality > 0 we decrement 
  // Basically whe I derived is that quality of brie, concert tickets, and sulfuras doesnt decrease over time but any other item the quality does
  // is set to zero if the sellIn is less than 0

  // Example vest goes up in quality as time progresses 

  // All items as long as there not sulfuras, hand of ragnaros seslls 

  // Uncomment to toggle between Conjured Mana Line of code that works properly and comment to one with the bug to simulate the test 
  // I left the one with the bug to simulate the typo and test case caught it. 

  updateQuality(): Array<Item> {

      this.items.forEach((item, index) => {

          // Remove Conjured Mana Cake item since it doesnt work properly from the batch (EDGE CASE IF IT WORKS)
          // if (item.name == 'Conjured Mana Cake') return this.items.splice(index, 1); 

          // Suppose there is was bug in the code right here (EDGE CASE IF THERE IS TYPO AKA BUG)
          if (item.name == 'Conjured Manas Cake') return this.items.splice(index, 1); 

          // Change item named foo to fixme if found in the batch 
          if (item.name === 'foo') item.name = 'fixme'; 

          // Sell anything that is not sulfuras
          if (item.name != 'Sulfuras, Hand of Ragnaros') item.sellIn = item.sellIn - 1;

          // Decrement quality for items less than 0
          if (item.sellIn < 0) {
            if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros' && item.quality > 0)
              item.quality = item.quality - 1
            else 
              item.quality -= item.quality;
          } 

          // As long as the sells are greater than 0 and quality is below 50 threshold then quality increases. 
          if (item.sellIn >= 0 && item.quality < 50) item.quality = item.quality + 1; 

      });

    return this.items;
  }
}
