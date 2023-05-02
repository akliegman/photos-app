import styles from "./App.module.scss";
import { Main } from "../../components/Main/Main";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Modals } from "../../components/Modals/Modals";
import { AllPhotos } from "../../components/AllPhotos/AllPhotos";
import { Route, Routes } from "react-router-dom";
import { getAllPhotos } from "../../store/slices/photosSlice";
import { getAllAlbums } from "../../store/slices/albumsSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setUser } from "../../store/slices/userSlice";
import { Helmet } from "../../components/Helmet/Helmet";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPhotos());
    dispatch(getAllAlbums());
    dispatch(setUser({ name: "Gooby Goo", email: "gooby@email.com" }));
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <Helmet />
      <Sidebar />
      <Main>
        <Routes>
          <Route path="/" element={<AllPhotos />} />
        </Routes>
      </Main>
      <Modals />
    </div>
  );
};
