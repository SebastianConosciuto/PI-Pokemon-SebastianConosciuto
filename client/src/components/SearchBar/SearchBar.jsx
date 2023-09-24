import React from "react";
import styles from "./searchBar.module.css";
import { Search } from "../../atoms/Search/Search";
import { Filter } from "../../atoms/Filter/Filter";

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Filter />
    </div>
  );
};
