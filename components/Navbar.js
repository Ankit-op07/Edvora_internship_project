import { useEffect, useState } from "react";
const Navbar = ({ userData }) => {
  const [user, setUser] = useState({
    name: "",
  });
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/user")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
        console.log(result);
      });
  }, []);

  useEffect(() => {
    userData(user);
  }, [user]);

  return (
    <>
      <div className="navbar-top">
        <div className="navbar-container">
          <div className="navbar-logo">EDVORA</div>
          <div className="navbar-profile">
            <div className="navbar-profile-name">{user.name}</div>
            <div className="navbar-profile-image">
              <img
                style={{ borderRadius: 50, height: "44px", width: "44px" }}
                src={user.url}
              />
            </div>
          </div>
        </div>
      </div>

      {/* css  */}

      <style jsx>
        {`
          .navbar-top {
            background-color: #101010;
            height: 84px;
          }
          .navbar-container {
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            margin-left: 43px;
            margin-right: 43px;
          }
          .navbar-logo {
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 43px;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }

          .navbar-profile {
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 25px;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
