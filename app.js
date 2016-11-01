(async function () {
    const num = await Promise.resolve(1)
    console.log(num)
})()