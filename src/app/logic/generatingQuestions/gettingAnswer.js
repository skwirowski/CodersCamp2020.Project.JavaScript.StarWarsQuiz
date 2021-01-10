export const getAnswer = async (mode, id) =>{
    const response = await fetch(`https://swapi.dev/api/${mode}/${id}`);
    const data = await response.json();
    return data;
}