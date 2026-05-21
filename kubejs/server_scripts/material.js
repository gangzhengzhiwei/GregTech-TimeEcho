ServerEvents.recipes(event => {
    event.remove([{type:'gtceu:alloy_smelter'}, {type:'gtceu:alloy_blast_smelter'}, {type:'gtceu:arc_furnace'}, {type:'gtceu:extractor'}, {type:'gtceu:electric_blast_furnace'}])
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