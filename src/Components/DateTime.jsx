import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Time = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  margin-right: 20px;
`;

export const DateTime = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <Time>
      <p>
        {" "}
        {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </p>
    </Time>
  );
};

export default DateTime;
