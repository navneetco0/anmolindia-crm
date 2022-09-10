export const Button = ({title})=>{
    return (
        <input
        type="submit"
        value={title}
        style={{
          backgroundColor: "#ff9200",
          display: "block",
          margin: "auto",
          marginBottom: "50px",
          padding: "5px 20px",
          fontSize: "22px",
          fontWeight: "600",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer",
        }}
      />
    )
}