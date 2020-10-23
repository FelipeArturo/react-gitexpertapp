export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=U6k8BavMUSgJfVQbzpGI1o8S9svbKcxY`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id:img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}