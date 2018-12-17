const url = 'https://www.themealdb.com/api/json/v1/1'

const theMealDB = {
    async getCategories() {
        try {
            const response = await fetch(`${url}/categories.php`);
            return await response.json();
        } catch (error) {
            console.error('[ERROR] getCategories : ', error);
            return error;
        }
    },
    async getMenubyCategorie(menu) {
        try {
            const response = await fetch(`${url}/filter.php?c=${menu}`);
            return await response.json();
        } catch (error) {
            console.error('[ERROR] getMenubyCategorie : ', error);
            return error;
        }
    },
}

export default theMealDB;