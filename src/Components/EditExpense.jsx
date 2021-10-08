import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const EditExpense = function () {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date("2000-10-02"));
  const [error, setError] = useState(true);

  // Tymczasowo na sztywno wpisana referencja dokumentu/wydatku (docelowo cała refernecja najlepiej gdyby przyszło propsem please?🥺)
  const expenseId = "JCqXLIhy6LQO4IEHo2ZJ";
  const uid = "LhzJ4kQAec12YQnMH2BE";
  const expenseDocumentReference = doc(
    db,
    "users",
    uid,
    "transactions2",
    expenseId
  );

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    // Pobranie wydatku z bazy danych
    const expenseDocument = await getDoc(expenseDocumentReference);
    const expense = expenseDocument.data();

    // Uzupełnienie formularza danymi
    setTitle(expense.name);
    setCategory(expense.category);
    setAmount(expense.value);
    setType(expense.type);
    setSelectedDate(expense.date.toDate());
    setError(false);
  };

  const UpdateData = async (e) => {
    e.preventDefault();
    // Zaktualizowanie wydatku w bazie danych
    try {
      await updateDoc(expenseDocumentReference, {
        name: title,
        category: category,
        value: +amount,
        date: selectedDate,
        type: type,
      });
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
          height: "466px",
          background: "#FFFFFF",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          style={{ width: "400px" }}
          id="outlined-basic"
          label="Title"
          value={title}
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          onBlur={(e) => (title === "" ? setTitle("Payment") : undefined)}
        />
        <Box sx={{ maxWidth: 400, marginLeft: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"groceries"}>Groceries</MenuItem>
              <MenuItem value={"household"}>Household</MenuItem>
              <MenuItem value={"work"}>Work</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <TextField
            style={{ width: "400px" }}
            id="outlined-number"
            label="Amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={amount}
            error={amount !== "" && amount <= 0}
            onChange={(e) => {
              setAmount(e.target.value);
              if (e.target.value !== "" && e.target.value > 0) {
                setError(false);
              } else {
                setError(true);
              }
            }}
          />
        </Box>
        <Box
          style={{
            width: "400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              inputFormat="MM/dd/yyyy"
              value={selectedDate}
              onChange={setSelectedDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ marginLeft: 2 }}>
          <FormControl component="fieldset">
            <RadioGroup
              style={{
                width: "400px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
              row
              aria-label="type"
              value={type}
              name="row-radio-buttons-group"
              onChange={(e) => setType(e.target.value)}
            >
              <FormControlLabel
                value="expense"
                control={<Radio />}
                label="Expense"
              />
              <FormControlLabel
                value="income"
                control={<Radio />}
                label="Income"
              />
            </RadioGroup>
          </FormControl>
        </Box>
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
          onClick={UpdateData}
          disabled={error}
        >
          SAVE
        </button>
      </Box>
    </div>
  );
};

export default EditExpense;