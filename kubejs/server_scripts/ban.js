ServerEvents.recipes(event=>{
    global.GTTE.banned.forEach(item => {
        event.remove({output:item})
        event.remove({input:item})
    })
})