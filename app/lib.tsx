const getPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts")
    const data = await response.json()
    return data.posts
}

const getPost = async (id: number) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await response.json()
    return data
}
export {
    getPosts,
    getPost
}