

const getAllPosts = async () => {
    const results = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
            next: {
                revalidate: 10,
            }
        }
    );
    if(!results.ok){
        throw new Error(`There was an error fetching post`);
    }
    return results.json();
};

export default getAllPosts;