import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2%;
  position: relative;
  `;
  
  // padding: 20px;
  // border: 1px solid rgba(255, 146, 0, 0.18);
  // box-shadow: 0 2px 6px 0 rgba(255, 146, 0, 0.37);
export {Wrapper}