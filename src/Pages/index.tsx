import  { useEffect, useState } from "react";
import MovieComponent from "../Components/MovieComponent";

interface Props {
  title: string;
  id: string;
  description: string;
}

const Home = () => {
  const [data, setData] = useState<Props[]>([]);
  const [page, setPage] = useState<number>(1);

  const getCardData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
      );
      const newData = await res.json();
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Page:", page);

  return (
    <>
      <MovieComponent movieInfo={data} />
    </>
  );
};

export default Home;
