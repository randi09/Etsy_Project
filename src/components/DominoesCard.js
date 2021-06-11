import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDominoesToCart } from "../actions/dominoesAction";
import { DominoesData } from "../DominoesData";
import ProductCard from "../components/ProductCard";

export default function DominoesCard() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const dominoes = useSelector((state) => state.addDominoes);

  useEffect(() => {
    addDominoesToCart(dispatch, DominoesData);
  }, []);

  return (
    <div>
      <h1>Dominoes</h1>

      {dominoes.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
