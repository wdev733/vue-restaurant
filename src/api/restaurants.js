const url = "http://localhost:8088/api"

export default {
    getAll() {
        try {
            const response = await fetch(`${url}/restaurants`);
            return await response.json();
        } catch(err) {
            console.error('[ERROR] getRestaurantsFromServer : ', err)
        }
    }
}