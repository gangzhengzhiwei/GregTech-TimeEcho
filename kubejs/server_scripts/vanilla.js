ServerEvents.recipes(event=>{
    event.remove({ type: 'minecraft:smelting'})
    event.remove({ type: 'minecraft:blasting'})
})

LootJS.modifiers(event => {
    event.addBlockLootModifier('minecraft:grass').matchMainHand('#forge:tools/knives').addLoot('charcoal_pit:straw')
    event.addBlockLootModifier('minecraft:tall_grass').matchMainHand('#forge:tools/knives').addLoot('charcoal_pit:straw')
});