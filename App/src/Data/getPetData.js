
export async function getPetData() {
    const web = 'http://localhost:8000/pets';
    try {
    const response = await fetch(web);
    const results = await response.json();


    return results
        

    } catch (error) {
        console.log(error);
    }
}