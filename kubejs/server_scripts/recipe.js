ServerEvents.recipes(event=>{

    event.remove({type:'crafting_shapeless', output:'charcoal_pit:unfired_sandy_brick'})
    event.shapeless('4x charcoal_pit:unfired_sandy_brick', [
        'minecraft:sand',
        '4x minecraft:clay_ball',
        'gtceu:brick_wooden_form'
    ]).keepIngredient('gtceu:brick_wooden_form')

    event.shaped('charcoal_pit:main_bloomery', [
        'SPS',
        'SAS',
        'SPS'
    ], {
        S:'gtceu:bronze_rod',
        P:'gtceu:bronze_plate',
        A:'charcoal_pit:sandy_brick'
    })

    event.remove({output:'charcoal_pit:sandy_tuyere'})
    event.shaped('charcoal_pit:sandy_tuyere', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S:'gtceu:bronze_rod',
        A:'charcoal_put:sandy_brick'
    })
})