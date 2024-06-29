
function AvatarAndNameAndDurtion({ avatarPath, name, durtion }) {
    return (
      <div style={{ display: "flex", alignItems: "center", margin: 3 }}>
        <img
          src={avatarPath}
          style={{ display: "flex", height: 24, width: 24 }}
          alt="profile-img"
        />
        <h6
          style={{
            display: "flex",
            margin: 0,
            marginLeft: 8,
            fontWeight: "normal",
          }}
        >
          {name}
        </h6>
        <h6
          style={{
            display: "flex",
            margin: 0,
            marginLeft: 5,
            fontWeight: "normal",
            color: "#757575",
          }}
        >
          · {durtion}
        </h6>
      </div>
    );
  }

  export default AvatarAndNameAndDurtion 