import { Outlet } from "react-router-dom";

import { Footer, LoginModal, NavBar, RegisterModal } from "../../components";
import { useTheme } from "../../hooks";

const BaseClient = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <>
      <div
        className="
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <NavBar
          imageUser=""
          isLogin={false}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
        />

        <LoginModal />
        <RegisterModal />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
