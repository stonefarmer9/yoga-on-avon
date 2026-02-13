import { Container, 
  Typography } from "@mui/material";
  import Grid from "@mui/material/Grid2";
import { BookingForm } from "@/components/bookingForm";
import { strings } from "@/utils";
import { Divider } from "@/components";

export default function BookAClass () {
 return (
   <Container>
     <Grid size={12} sx={{mb: "2%"}}>
          <Typography
            variant="h1"
            sx={{ fontSize: "2.25rem", fontWeight: "300" }}
            textAlign={"center"}
          >
            {strings.BookAClassTitle}
          </Typography>
          <Grid size={12}>
            <Divider orientation="horizontal" />
          </Grid>
        </Grid>
    <BookingForm/></Container>
   

 )
}