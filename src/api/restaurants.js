const url = "http://localhost:8088/api"

const restaurants = {
    async getAll({ page = 1, pageSize = 10, restaurantName }) {
        if(page) {page = `page=${page}&`}
        if(pageSize) { pageSize = `pagesize=${pageSize}&` }
        if(restaurantName) { restaurantName = `name=${restaurantName}&` } 
        else {restaurantName = '' }
        
        try {
            const response = await fetch(`${url}/restaurants?${page}${pageSize}${restaurantName}`);
            return await response.json();
        } catch(err) {
            console.error('[ERROR] getAll : ', err);
            return err;
        }
    },
    async getById(id) {
        try {
            const response = await fetch(`${url}/restaurants/${id}`);
            return await response.json();
        } catch(err) {
            console.error('[ERROR] getById : ', err);
            return err;
        }
    }
}

export default restaurants;