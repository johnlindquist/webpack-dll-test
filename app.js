(async function () {
    const num = await Promise.resolve(2)
    console.log(num)
})()