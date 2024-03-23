import React from "react";
import "./style.css";

export const SearchBox = (props) => (
  <input
    className="search-box"
    type="search"
    placeholder="ロボ検索します。"
    onChange={props.onSearch}
  ></input>
);
