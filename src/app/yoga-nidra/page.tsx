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
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic" }}
          >
            {strings.YogaNidraIntroduction}
          </Typography>
          <Typography variant="body1">{strings.YogaNidraAuthor}</Typography>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography variant="body1">
            {strings.YogaNidraClassOutline}
          </Typography>
        </Grid> 
        <Grid size={{md:4}}>
          <Button
            component={Link}
            href={`/book-a-class/yogaNidra`}
            variant="outlined"
            endIcon={<Send />}
          >
            Book now
          </Button>
        </Grid>
        <Grid
          size={12}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Image
            src={YogiClass}
            alt="Yoga class"
            width={1200}
            height={800}
          />
        </Grid>
       
      </Grid>
    </Container>
  );
}
