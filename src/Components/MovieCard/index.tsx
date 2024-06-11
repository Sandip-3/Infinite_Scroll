const MovieCard = ({ MyData } : any) => {
    const { title, body, id } = MyData;
  return (
    <div className="card col-span-1 border m-4">
      <div className="card-info h-[30vh] p-4">
        <p className="card_id text-center">{id}</p>
        <h1>{body.substr(0, 150)}</h1>
        <h1 className="mt-12 text-center bg-black text-white">{title.substr(0, 15)}</h1>
      </div>
    </div>
  );
}

export default MovieCard;