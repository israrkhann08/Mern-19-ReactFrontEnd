import axios from "axios";
import { useEffect, useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    let response = await axios.get("https://fakestoreapi.com/products/");
    // console.log(response.data);
    setProducts(response.data);
  };

  return (
       <>
      {products.map((item, index) => {
        return (
          <>
            <div className=" w-[400px] flex flex-wrap m-12 justify-center flex-col items-center border-2">
              <br />
              <img className="w-[200px]  m-auto" src={item.image} alt="" />

              <h4 className="text-gray-900 mt-2">{item.category}</h4>
              <p className="font-mono text-justify mt-1 p-3">
                {item.description}
              </p>

              <p className="font-bold underline mt-2">Price: ${item.price}</p>
              <p className="font-bold">Ratings: {item.rating.price}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Products;
