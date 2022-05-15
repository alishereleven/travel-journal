import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data"

export default function App() {
  return (
    <div>
      <Header />
      <main>
        {data.map((data) => <Card {...data} />)}
      </main>
    </div>
  )
}