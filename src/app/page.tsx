import Typography from '@mui/material/Typography';
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import YogiClass from "@/Assests/yogi-class.jpg"
import BigSmile from "@/Assests/big-smile-sm.jpg"
import Image from "next/image";
import { Box, Button, Container, Divider, IconButton, Stack } from '@mui/material';
import { strings } from '@/utils';
import lessons  from "@/utils/lessons"
import { lesson } from '@/utils/lessons'
import LocationOn from "@mui/icons-material/LocationOn";
import AccessTime from '@mui/icons-material/AccessTime'
import Spa from '@mui/icons-material/Spa'
import  CurrencyPound from '@mui/icons-material/CurrencyPound';
import Send from '@mui/icons-material/Send'
import Link from "next/link";

export default function Home() {

  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          size={12}
          style={{
            marginBottom: "10%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1">Current classes</Typography>
        </Grid>
      
        <>
          {lessons.map((lesson) => {
            return (
              <Grid
                container
                spacing={2}
              >
                <Grid size={3}>
                  <Stack spacing={2}>
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      <Spa
                        sx={{
                          position: "absolute",
                          fontSize: "16rem",
                          color: "grey.300",
                          opacity: 0.3,
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          zIndex: 0,
                        }}
                      />
                      <Typography
                        variant="h2"
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          padding: 2,
                        }}
                      >
                        {lesson.name}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1">{lesson.info}</Typography>
                  </Stack>
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                />
                <Grid size={8}>
                  <Stack
                    spacing={6}
                    padding={"5% 5% 5% 0"}
                  >
                    <Stack spacing={2}>
                      <Typography
                        variant="h5"
                        display="flex"
                        alignItems="center"
                      >
                        <AccessTime style={{ marginRight: "1.5%" }} />
                        {lesson.dateTime}
                      </Typography>
                      <Typography
                        variant="h5"
                        display="flex"
                        alignItems="center"
                      >
                        <LocationOn style={{ marginRight: "1.5%" }} />
                        {lesson.location}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      display="flex"
                      alignItems="center"
                    >
                      <CurrencyPound style={{ marginRight: "1.5%" }} />
                      {`£${lesson.price} per person`}
                    </Typography>
                    <Button
                      component={Link}
                      href={`/book-a-class/yogaNidra`}
                      variant="outlined"
                      endIcon={<Send />}
                    >
                      Book now
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            );
          })}
        </>
      </Grid>
      <Grid
        container
        spacing={3}
        style={{ marginTop: "15%" }}
      >
        <Grid size={4}>
          <Typography variant="body1">{strings.Introduction}</Typography>
        </Grid>
        <Grid size={4}>
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

