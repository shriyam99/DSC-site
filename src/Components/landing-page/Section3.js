import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import StudyJamImage from "../../images/studyjam.jpeg";
import ExploreMLImage from "../../images/exploreML.jpeg";
import WorkshopsImage from "../../images/workshops.jpeg";

const Section3 = () => {
  return (
    <Box my={8}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4} lg={4}>
          <Card data-aos="flip-right">
            <CardActionArea>
              <img className="card-img" src={StudyJamImage} alt="studyjam" />
              <CardContent>
                <Typography component="p" variant="h4" align="left">
                  Cloud Study Jam
                </Typography>
                <Typography component="p" variant="body1" align="left">
                 Google Cloud Study Jams are community-run study groups for developers. From containerizing applications to creating virtual machines, study jams can be tailored to specific cloud topics and skill levels. Students also get trained with hands-on learning experience.  
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="section-2-paper">
              <Button
                variant="outlined"
                onClick={() => {
                  window.location = "/highlights#csj";
                }}
              >
                Insights
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Card data-aos="flip-right">
            <CardActionArea>
              <CardContent>
                <img
                  className="card-img"
                  src={WorkshopsImage}
                  alt="workshops"
                />

                <Typography component="p" variant="h4" align="left">
                  Workshops
                </Typography>
                <Typography component="p" variant="body1" align="left">
                  Workshops provide the ability to learn new development skills and solve the problems in the world using technology. Students can also display their prototypes and solutions for industries and organizations in these workshops and get honest reviews from fellow developers.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="section-2-paper">
              <Button
                variant="outlined"
                onClick={() => {
                  window.location = "/highlights";
                }}
              >
                Insights
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item sm={12} md={4} lg={4}>
          <Card data-aos="flip-left">
            <CardActionArea>
              <img className="card-img" src={ExploreMLImage} alt="exploreml" />
              <CardContent>
                <Typography component="p" variant="h4" align="left">
                  Explore ML
                </Typography>
                <Typography component="p" variant="body1" align="left">
                  Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of Machine Learning Content (Beginner, Intermediate, Advanced). It is a 2-day training experience for the students.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="section-2-paper">
              <Button
                variant="outlined"
                onClick={() => {
                  window.location = "/highlights#exploreml";
                }}
              >
                Insights
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;
