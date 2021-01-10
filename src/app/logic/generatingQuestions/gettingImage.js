export const getImage = async (mode, id) => {
    const image = await fetch(`static/assets/img/modes/${mode}/${id}.jpg`)
    const blob = await image.blob();
    return Buffer.from(await blob.arrayBuffer()).toString('base64');
}