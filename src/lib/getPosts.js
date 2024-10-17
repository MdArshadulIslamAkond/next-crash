const GetPosts = async (id) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // const posts = await response.json();
    return response.json();
}
export default GetPosts;