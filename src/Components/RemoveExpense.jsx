import { doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Paragraph = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: rgb(85, 85, 85);
  text-align: center;
`;

const RemoveExpense = function () {
  // Tymczasowo na sztywno wpisana referencja dokumentu/wydatku (docelowo cała refernecja najlepiej gdyby przyszło propsem please?🥺)
  const expenseId = "upTlouBbVjBtBfSNVsXr";
  const uid = "LhzJ4kQAec12YQnMH2BE";
  const expenseDocumentReference = doc(
    db,
    "users",
    uid,
    "transactions2",
    expenseId
  );

  const RemoveData = async (e) => {
    e.preventDefault();
    // Zaktualizowanie wydatku w bazie danych
    try {
      await deleteDoc(expenseDocumentReference);
      console.log("Expense document has been updated.");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(59, 58, 90, 0.4)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          padding: "50px",

          width: "410px",
          height: "150px",
          background: "#FFFFFF",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        noValidate
        autoComplete="off"
      >
        <Paragraph>
          Are you sure?
          <br />
          Deleting this transaction will erase it permamently.
        </Paragraph>

        <button
          style={{
            width: "400px",
            height: "48px",
            background: "linear-gradient(180deg, #7AECF4 0%, #44DFE9 100%)",
            boxShadow:
              "inset 2px 0px 2px rgba(255, 255, 255, 0.1), inset 0px 6px 10px rgba(255, 255, 255, 0.25)",
            borderRadius: "8px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "24px",
          }}
          onClick={RemoveData}
        >
          REMOVE
        </button>
      </Box>
    </div>
  );
};

export default RemoveExpense;
