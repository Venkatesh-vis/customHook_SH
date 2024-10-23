import React, { lazy, Suspense, useState } from "react";
import styles from "./App.module.css";
import { Button } from "@mui/material";
import Loader from "./components/loader";

const LazyForm = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./components/Form"));
      }, 3000);
    })
);

function App() {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(true);
  };

  return (
    <>
      <div className={styles.btnn}>
        {!view && (
          <Button variant="contained" onClick={handleView}>
            Start Registration
          </Button>
        )}
        {view && (
          <Suspense fallback={<Loader />}>
            <LazyForm />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;

