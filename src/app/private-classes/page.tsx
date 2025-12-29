import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import YogiClass from "@/Assests/yogi-class.jpg";
import BigSmile from "@/Assests/big-smile-sm.jpg";
import Image from "next/image";
import { Button, Container } from "@mui/material";
import { strings } from "@/utils";
import { Send } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        spacing={3}
      >
        <Grid size={2}>
          <Button
            component={Link}
            href={`/book-a-class/privateClass`}
            variant="outlined"
            endIcon={<Send />}
          >
            Book now
          </Button>
        </Grid>
        <Grid size={6}>
          <Image
            src={YogiClass}
            alt="Yoga class"
            width={700}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </Grid>
        <Grid size={4}>
          <Typography variant="body1">{strings.Introduction}</Typography>
        </Grid>
        <Grid size={8}>
          <Typography variant="body1">{strings.YogaInformation}</Typography>
        </Grid>
        <Grid size={4}>
          <Image
            src={BigSmile}
            alt="The teacher"
            width={400}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
