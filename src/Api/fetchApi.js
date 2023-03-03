const getRandomWordl = async () => {
    try {
        return await fetch("https://random-word-api.herokuapp.com/word")
            .then((response) => {
                return response.json();
            }).then((json) => {
                return json[0].toUpperCase();
            })
    } catch (error) {
        throw error
    }
}

export {
    getRandomWordl
}