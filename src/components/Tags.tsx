import "./Tags.scss"
function Tags({data}) {
    return (
      <div className="tags">
        {data.tags?.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>
    );
  }
  export default Tags;