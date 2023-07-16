import { Route, Routes } from "react-router-dom";

<<<<<<< Updated upstream
import {
  BaseClient,
  HomePage,
  HotelDetailPage,
  HotelList,
  InformationPage,
  ReservationPage,
} from "..";
=======
import { BaseClient, HomePage, HotelDetailPage, HotelList , ProfilePage} from "..";
>>>>>>> Stashed changes

const RouteClient = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseClient />}>
          <Route index element={<HomePage />} />
          <Route path="hotel-list" element={<HotelList />} />
          <Route path="hotel-detail/:id" element={<HotelDetailPage />} />
<<<<<<< Updated upstream
          <Route path="profile" element={<InformationPage />} />
          <Route path="profile/reservation" element={<ReservationPage />} />
=======
          <Route path="user" element={<ProfilePage />} />
>>>>>>> Stashed changes
        </Route>
      </Routes>
    </>
  );
};

export default RouteClient;
