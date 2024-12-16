import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "./zod"; // Assuming this imports from the correct path
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";

const Form: React.FC = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(formSchema),
    });
  
    const onSubmit = (data: FormData) => {
      console.log("Form Submitted:", data);
    };
  
  return (
    <Box
    component="form"
    onSubmit={handleSubmit(onSubmit)}
    sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "0 auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
        alignItems: "flex-start",
    }}
  >
    {/* Destination Field */}
    <Box item xs={12} sx={{ marginTop: "5px" }}>
      <label htmlFor="destination" style={{ marginRight: "350px", marginBottom: "12px" }}>
        I Want to Go to
      </label>
      <TextField
        id="destination"
        fullWidth
        {...register("destination")}
        error={!!errors.destination}
        helperText={errors.destination?.message}
        sx={{
          m: 1,
          borderRadius: "8px",
          "& .MuiInputBase-root": { height: "35px" },
        }}
      />
    </Box>

    {/* From Field */}
    <Box item xs={12} sx={{ marginTop: "5px" }}>
      <label htmlFor="from" style={{ marginRight: "450px" }}>
        From
      </label>
      <TextField
        id="from"
        fullWidth
        {...register("from")}
        error={!!errors.from}
        helperText={errors.from?.message}
        sx={{
          m: 1,
          borderRadius: "8px",
          "& .MuiInputBase-root": { height: "35px" },
        }}
      />
    </Box>

    {/* Date Field */}
    <Box item xs={12} sx={{ marginTop: "5px" }}>
      <label htmlFor="date" style={{ marginRight: "410px", marginBottom: "8px" }}>
        On Date
      </label>
      <TextField
        type="date"
        fullWidth
        {...register("date")}
        error={!!errors.date}
        helperText={errors.date?.message}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          m: 1,
          "& .MuiInputBase-root": {
            borderRadius: "8px",
            height: "35px",
          },
        }}
      />
    </Box>

    {/* Days Field */}
    <Box item xs={12} sx={{ marginTop: "5px" }}>
      <label htmlFor="days" style={{ marginRight: "350px", marginBottom: "8px" }}>
        For Number of Days
      </label>
      <TextField
        fullWidth
        required
        id="days"
        defaultValue="0"
        type="number"
        {...register("days")}
        error={!!errors.days}
        helperText={errors.days?.message}
        sx={{
          m: 1,
          borderRadius: "8px",
          "& .MuiInputBase-root": {
            height: "35px",
          },
        }}
      />
    </Box>

    {/* Travel Mode Field */}
    <Box item xs={12} sx={{ marginTop: "5px" }}>
        <label
          htmlFor="PreferredModeofTravel"
          style={{ marginRight: "300px", marginBottom: "8px" }}
        >
          Preferred Mode of Travel
        </label>
        <FormControl
          sx={{
            m: 1,
            width: "100%",
            borderRadius: "8px",
          }}
          error={!!errors.travelMode}
        >
          <Select
            displayEmpty
            {...register("travelMode")}
            id="PreferredModeofTravel"
           
            sx={{
              height: "35px", // Set a consistent height for the input
              "& .MuiInputBase-root": {
                height: "35px", // Ensure the input field stays at the same height
              },
            }}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value="Train">Train</MenuItem>
            <MenuItem value="Flight">Flight</MenuItem>
            <MenuItem value="Bus">Bus</MenuItem>
          </Select>
          {errors.travelMode && (
            <FormHelperText>{errors.travelMode.message}</FormHelperText>
          )}
        </FormControl>
      </Box>

    {/* Number of People Field */}
    <Box item xs={12} sx={{ marginTop: "5px" }}>
      <label htmlFor="people" style={{ marginRight: "200px", marginBottom: "8px" }}>
        Number Of People Who are Travelling
      </label>
      <TextField
        fullWidth
        required
        id="people"
        defaultValue="1"
        type="number"
        {...register("people")}
        error={!!errors.people}
        helperText={errors.people?.message}
        sx={{
          m: 1,
          borderRadius: "8px",
          "& .MuiInputBase-root": {
            height: "35px",
          },
        }}
      />
    </Box>

        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="WhatsAppNumber"
            style={{ marginRight: "300px", marginBottom: "10px" }}
          >
            WhatsApp Number
          </label>
          <TextField
            fullWidth
            placeholder="WhatsApp Number"
            {...register("whatsapp")}
            error={!!errors.whatsapp}
            helperText={errors.whatsapp?.message}
            sx={{
              m: 1,
              borderRadius: "8px",
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2, borderRadius: "5px" }}
          >
            Tell us more
          </Button>
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="Purpose"
            style={{ marginRight: "400px", marginBottom: "8px" }}
          >
            Purpose
          </label>
          <FormControl
            sx={{
              m: 1,
              width: "100%",
              borderRadius: "8px",
              "& .MuiInputBase-root": { height: "35px" },
            }}
          >
            <Select
              displayEmpty
              {...register("purpose")}
              labelId="travelMode-label"
              error={!!errors.purpose}
            >
              <MenuItem value="">
                <em>None</em>
                    </MenuItem>
            <MenuItem value="Vacation">Vacation</MenuItem>
            <MenuItem value="Honeymoon">Honeymoon</MenuItem>
            <MenuItem value="Wedding">Wedding</MenuItem>
            <MenuItem value="Staycation">Staycation</MenuItem>
            <MenuItem value="Office Tour">Office Tour</MenuItem>
            <MenuItem value="Religious tour">Religious tour</MenuItem>
            </Select>
            {errors.purpose && (
              <FormHelperText error>{errors.purpose?.message}</FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="details"
            style={{ marginRight: "400px", marginBottom: "8px" }}
          >
            Other Details
          </label>
          <TextField
            label=""
            fullWidth
            multiline
            rows={4}
            {...register("details")}
            error={!!errors.details}
            helperText={errors.details?.message}
            sx={{
              m: 1,
              borderRadius: "8px",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                height: "90px",
              },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ m: 1 , marginTop: "5px", width: "100%" }}>
          <label
            htmlFor="email"
            style={{ marginRight: "400px", marginBottom: "8px" , display: "block"  }}
          >
            
            Email ID
          </label>
          <TextField
            fullWidth
            placeholder="Email ID"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              borderRadius: "8px",
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Box>

  {/* Submit Button */}
     {/* Submit Button */}
     <Box sx={{ marginTop: "20px", width: "100%" }}>
        <Button
          variant="contained"
          color="success"
          type="submit"
          fullWidth
          sx={{
            
            borderRadius: "5px",
            padding: "10px",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          GET A PERSONAL ITINERARY ON WHATSAPP
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
