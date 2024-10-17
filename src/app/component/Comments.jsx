const Comments = async ({ Promise }) => {
  const comments = await Promise;
  return (
    <div>
      <h1 className="text-2xl">Comments</h1>
      <ul className="space-y-6">
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>
              <span className="text-green-500">{comment.name}</span>:{" "}
              {comment.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
