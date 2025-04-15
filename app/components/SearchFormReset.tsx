"use client";

import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  const reset = () => {
    // Reset logic here, e.g., clear the input field
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        X
      </Link>
    </button>
  );
};

export default SearchFormReset;
