const url = "http://localhost:8088/api"

const restaurants = {
    async getAll() {
        try {
            const response = await fetch(`${url}/restaurants`);
            return await response.json();
        } catch(err) {
            console.error('[ERROR] getAll : ', err);
            return err;
        }
    }
}

export default restaurants;