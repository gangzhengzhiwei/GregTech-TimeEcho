ItemEvents.tooltip(event=>{
    global.GTTE.banned.forEach(item=>{
        event.add(item, Text.red("Banned"))
    })
})

JEIEvents.hideItems(event => {
    global.GTTE.banned.forEach(item=>{
        event.hide(item)
    }) 
})