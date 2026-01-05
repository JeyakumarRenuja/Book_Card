function BookCard({ title, author, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition h-80 w-95 mt-35 text-center">
      <h2 className="text-4xl font-bold text-slate-950 text-center pt-7">{title}</h2>
      <h4 className="text-xl text-slate-900 mt-1">Author: {author}</h4>
      <p className="text-zinc-950 mt-4 text-2xl">{description}</p>
    </div>
  );
}

export default BookCard;
