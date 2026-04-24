ServerEvents.recipes(event => {
    //bronze
    event.custom({
        type: 'charcoal_pit:orekiln',
        ingredients: [
            {tag: 'forge:ingots/copper'},
            {tag: 'forge:ingots/copper'},
            {tag: 'forge:ingots/copper'},
            {tag: 'forge:ingots/tin'}
        ],
        result: {
            item: 'gtceu:bronze_ingot', count: 4
        }
    })
})