const Instagram = ({ feed }) => {
  const images = feed.data;
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {images &&
          images.slice(0, 4).map((image) => (
            <div key={image.id}>
              <img src={image.media_url} alt={image.caption} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Instagram;
