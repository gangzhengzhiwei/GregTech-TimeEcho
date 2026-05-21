const items = [
    'gtte:compress_iron_ore',
]
StartupEvents.registry('item', event=>{
    items.forEach(i => event.create(i))
})