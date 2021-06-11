const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "500px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
