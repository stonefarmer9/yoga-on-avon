import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import YogiClass from "@/Assests/yogi-class.jpg";
import BigSmile from "@/Assests/big-smile-sm.jpg";
import Image from "next/image";
import { Button, Container
 } from "@mui/material";
import { strings } from "@/utils";
import { Send } from "@mui/icons-material";
import Link from "next/link";


export default function Home() {
  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        spacing={4}
      >
        <Grid size={6}>
          <Typography variant="body1">
            {strings.YogaNidraIntroduction}
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="body1">
            {strings.YogaNidraClassOutline}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Image
            src={YogiClass}
            alt="Yoga class"
            width={1200}
            height={800}
          />
        </Grid>
        <Grid size={4}>
          <Button
          component={Link}
          href={`/book-a-class/yogaNidra`}
          variant="outlined"
          endIcon={<Send />}
        >
          Book now
        </Button> 
        </Grid>
       
      </Grid>
    </Container>
  );
}
