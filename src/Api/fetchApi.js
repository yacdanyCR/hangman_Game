const getRandomWordl = async () => {
    try {
        return await fetch("https://random-words-api.vercel.app/word/")
            .then((response) => {
                return response.json();
            }).then((json) => {
                return json[0].word.toUpperCase();
            })
    } catch (error) {
        throw error
    }
}

export {
    getRandomWordl
}