ServerEvents.recipes(event => {
     event.remove({ type: 'minecraft:smelting' })
     event.remove({ type: 'minecraft:blasting' })
     event.remove({ type: 'charcoal_pit:orekiln' })
     event.remove({type:'charcoal_pit:bloomery'})

     event.custom({
          type: 'charcoal_pit:orekiln',
          ingredients: [
               {tag:'gtte:orekiln_copper'},
          ],
          result: {
               item: 'minecraft:copper_ingot', count: 1
          }
     })
     event.custom({
          type: 'charcoal_pit:orekiln',
          ingredients: [
               {tag:'gtte:orekiln_tin'},
          ],
          result: {
               item: 'gtceu:tin_ingot', count: 1
          }
     })
     event.custom({
          type: 'charcoal_pit:orekiln',
          ingredients: [
               {tag:'gtte:orekiln_cassiterite'},
          ],
          result: {
               item: 'gtceu:tin_nugget', count: 3
          }
     })

     //wrought_iron
    event.custom({
        type:'charcoal_pit:bloomery',
        input:{tag:'forge:ores/iron'},
        output:{item:'gtceu:wrought_iron_ingot'},
        fail:{item:'charcoal_pit:bloom_fail'},
        cool:{item:'charcoal_pit:bloom_cool'}
    })
})
ServerEvents.tags('item', event=>{
     event.add('gtte:orekiln_copper', '#forge:ores/copper', 'minecraft:raw_copper')
     event.add('gtte:orekiln_tin', '#forge:ores/tin', 'gtceu:raw_tin')
     event.add('gtte:orekiln_cassiterite', '#forge:ores/cassiterite', '#forge:ores/cassiterite_sand', 'gtceu:raw_cassiterite', 'gtceu:raw_cassiterite_sand')
})
