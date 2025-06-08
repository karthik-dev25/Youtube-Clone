const CommentsSection = (props) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal, likeCount } =
    props && props.commentsData ? props.commentsData : [];
  return (
    <div className="flex my-4">
      <img
        className=" h-10 rounded-full"
        src={authorProfileImageUrl}
        alt="authorProfile"
      />
      <div className="ml-4 text-sm">
        <p className="mb-2">{authorDisplayName}</p>
        <p className="mb-2">{textOriginal}</p>
        <div>Like {likeCount}</div>
      </div>
    </div>
  );
};

export default CommentsSection;
