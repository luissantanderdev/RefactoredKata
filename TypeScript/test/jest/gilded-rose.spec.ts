import { Item, GildedRose } from '@/gilded-rose';
import runTestSimulation from '../golden-master-text-test'; 

// MARK: Test if the first item is fixme 
describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose2 = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose2.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});

// MARK: Test to see backstage passes after 2 days of updating the quality 
describe('Gilded Rose', () => {
  it('Sulfuras, Hand of Ragnaros should not decrement', () => {
    const items: Array<Item> = runTestSimulation(); 
    expect(items[3].sellIn).toBe(0);
    expect(items[4].sellIn).toBe(-1); 
  });
});


// MARK: Test to see using 1 day increment 
describe('Gilded Rose', () => {
  it('Vest should increment in quality 1 day', () => {
    const items: Array<Item> = runTestSimulation(1); 
    expect(items[0].quality).toBe(21);
  });
});

// MARK: Check if the conjured mana cake was removed since does not work properly. 
describe('Gilded Rose', () => {
  it('Check if conjured mana cake is in the batch and got removed', () => {
    const items: Array<Item> = runTestSimulation(40); 
    expect(items.find(item => item.name == 'Conjured Mana Cake')).toBe(undefined);
  });
});
