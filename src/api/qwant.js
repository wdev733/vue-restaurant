const url = "https://api.qwant.com/api/search/images"

const qwant = {
    async image(name, count = 1) {
        const type = 'images';
        const uiv = 4
        try {
            const response = await fetch(`${url}?q=${name}&count=${count}&t=${type}$uiv=${uiv}`);
            return await response.json();
        } catch(err) {
            console.error('[ERROR] image : ', err);
            return err;
        }
    },
}

export default qwant;