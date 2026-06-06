GTCEuStartupEvents.registry('gtceu:machine', event=>{
    event.create('steam_bender', 'steam')
        .definition((pressure, builder)=>{
            builder.recipeType('bender').workableSteamHullModel(pressure, 'gtceu:block/machines/steam_bender')
    })
    event.create('steam_lathe', 'steam')
        .definition((pressure, builder)=>{
            builder.recipeType('lathe').workableSteamHullModel(pressure, 'gtceu:block/machines/steam_lathe')
    })
})