import { collection, addDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const AddExpenseIncome = function () {
  const [title, setTitle] = useState("Payment");
  const [category, setCategory] = useState("groceries");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [selectedDate, setSelectedDate] = useState(new Date("2020-10-02"));

  const handleDateChange = (date) => setSelectedDate(date);

  const ReadData = (e) => {
    e.preventDefault();
    console.log(title, category, amount, type);
    //   firebaseFuncAddDoc({title, category, amount, date, type});
    //   try {
    //     const docRef = await addDoc(collection(db, "cities"), {
    //       name: title,
    //       category: category,
    //       value: amount,
    //       date,
    //       type: `${amount < 0 ? "expense" : "income"}`,
    //       type: type,
    //       uid: "123",
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (err) {
    //     console.error("Error adding document: ", err);
    //   }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          backgroundColor: "lightblue",
          padding: "100px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Title"
          value={title}
          variant="outlined"
          onClick={(e) => (e.target.value = "")}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={(e) => (title === "" ? setTitle("Payment") : undefined)}
        />
        <Box sx={{ maxWidth: 226, marginLeft: 1 }}>
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
            id="outlined-number"
            label="Amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            error={amount !== "" && amount <= 0}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Box>
        <Box sx={{ maxWidth: 226, marginLeft: 2 }}>
          <FormControl component="fieldset">
            <RadioGroup
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
        <Box>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
              <KeyboardDatePicker
                disableToolbar
                // variant="inline"
                format="MM/dd/yyy"
                // margin="normal"
                id="date-picker"
                // label="Date picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{ "aria-label": "change-date" }}
              ></KeyboardDatePicker>
            </Grid>
          </MuiPickersUtilsProvider>
        </Box>
        <button onClick={ReadData}>Add</button>
      </Box>
    </div>
  );
};

export default AddExpenseIncome;
