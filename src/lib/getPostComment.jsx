const GetPostsComments = async (id) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    // const posts = await response.json();
    return response.json();
}
export default GetPostsComments;