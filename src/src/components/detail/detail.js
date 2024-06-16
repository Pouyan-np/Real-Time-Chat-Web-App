import "./detail.css";
import { useUserStore } from "../../lib/userStore";

const Detail = () => {
  const { logout } = useUserStore();

  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="Expand" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="Expand" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="Expand" />
          </div>
          <div className="photos">
            <div className="photosItem">
              <div className="photoDetail">
                <img src="" alt="Shared" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download" className="icon" />
            </div>
            <div className="photosItem">
              <div className="photoDetail">
                <img src="" alt="Shared" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download" className="icon" />
            </div>
            <div className="photosItem">
              <div className="photoDetail">
                <img src="" alt="Shared" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download" className="icon" />
            </div>
            <div className="photosItem">
              <div className="photoDetail">
                <img src="" alt="Shared" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Expand" />
          </div>
        </div>
        <button>Block user</button>
        <button className="logout" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Detail;
