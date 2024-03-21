import { useState } from "react";
import { TextField, Button, Typography, Box, InputLabel,
  MenuItem,FormControl,Select} from "@mui/material";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [reference, setReference] = useState('');

  const handleChange = (event) => {
    setReference(event.target.value);
  };


  return (
    <Box
      sx={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          mx: "auto",
          p: 2,
          border: "2px solid  #000000",
          borderRadius: "12px",
          boxShadow: 1,
          
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
        <FormControl sx={{ minWidth: 600 }}>
            <InputLabel id="simple-select-autowidth-label">How did you hear about us</InputLabel>
            <Select
              labelId="simple-select-autowidth-label"
              id="simple-select-autowidth"
              value={reference}
              onChange={handleChange}
              label="How did you hear about us"
            >          
             <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={'Previous Customer'}>Previous Customer</MenuItem>
              <MenuItem value={'Referral'}>Referral</MenuItem>
              <MenuItem value={'Social Media'}>Social Media</MenuItem>
              <MenuItem value={'Search Engine'}>Search Engine</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#fff",
               color: "#111",
                "&:hover": {
                backgroundColor: "#cccc",
              },
              // color: "#fff",
              // "&:hover": {
              //   backgroundColor: "#111",
              // },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}