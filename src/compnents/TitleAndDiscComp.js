function TitleAndDiscComp ({title, disc}){
    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
        <p
          style={{
            display: "flex",
            margin: 0,
            marginLeft: 8,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
            {title}
        </p>

        <h6
          style={{
            display: "flex",
            margin: 0,
            marginTop: 7,
            marginLeft: 8,
            fontWeight: "normal",
            fontSize: 13,
            color: "#292929",
          }}
        >
       {disc}
        </h6>
      </div>
    );
}

export default TitleAndDiscComp