import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@material-ui/core";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarsIcon from "@material-ui/icons/Stars";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./Filter.css";
import { forwardRef } from "react";

const Filter = forwardRef(({ showFilter }, ref) => {
  const handleChange = () => {};
  return (
    showFilter && (
      <div className="filter" ref={ref}>
        <Card className="card" variant="outlined">
          <CardContent className="card__content">
            <div className="sort__by">
              <Typography>Sort by</Typography>
              <div className="sort__by__buttons">
                <Button
                  variant="contained"
                  color="secondary"
                  className="most_viewed"
                  startIcon={<AccessTimeIcon className="ml-4" />}
                >
                  Recent
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="most_viewed"
                  startIcon={<AccessTimeIcon />}
                >
                  Most Popular
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="most_viewed"
                  startIcon={<VisibilityIcon />}
                >
                  Most Viewed
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="most_viewed"
                  startIcon={<StarsIcon />}
                >
                  Most Rating
                </Button>
              </div>
            </div>

            <div className="type__selection">
              <FormControl className="film_type" component="fieldset">
                <FormLabel component="legend">
                  <Typography
                    style={{ color: "white" }}
                    gutterBottom
                  >
                    Film Type
                  </Typography>
                </FormLabel>
                <RadioGroup
                  className="film_type_option_list"
                  aria-label="film_type"
                  name="film_type"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                  />
                  <FormControlLabel
                    value="movies"
                    control={<Radio />}
                    label="Movies"
                  />
                  <FormControlLabel
                    value="tv_series"
                    control={<Radio />}
                    label="Tv-Series"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl className="release_date" component="fieldset">
                <FormLabel component="legend">
                  <Typography style={{ color: "white" }} gutterBottom>
                    Genre
                  </Typography>
                </FormLabel>
                <FormGroup
                  className="film_type_option_list"
                >
                  <FormControlLabel
                    value="horror"
                    control={
                      <Checkbox
                        style={{ color: "white" }}
                      />
                    }
                    label="Horror"
                  />
                  <FormControlLabel
                    value="action"
                    control={<Checkbox  />}
                    label="Action"
                  />
                  <FormControlLabel
                    value="adventure"
                    control={<Checkbox />}
                    label="Adventure"
                  />
                  <FormControlLabel
                    value="animation"
                    control={<Checkbox />}
                    label="Animation"
                  />
                  <FormControlLabel
                    value="Comedy"
                    control={<Checkbox />}
                    label="Comedy"
                  />
                  <FormControlLabel
                    value="crime"
                    control={<Checkbox />}
                    label="Crime"
                  />
                </FormGroup>
              </FormControl>
              <FormControl className="release_date" component="fieldset">
                <FormLabel component="legend">
                  <Typography style={{ color: "white" }} gutterBottom>
                    Country
                  </Typography>
                </FormLabel>
                <FormGroup className="film_type_option_list">
                  <FormControlLabel
                    value="asia"
                    control={<Checkbox />}
                    label="Asia"
                  />
                  <FormControlLabel
                    value="china"
                    control={<Checkbox />}
                    label="China"
                  />
                  <FormControlLabel
                    value="korea"
                    control={<Checkbox />}
                    label="Korea"
                  />
                  <FormControlLabel
                    value="india"
                    control={<Checkbox />}
                    label="India"
                  />
                  <FormControlLabel
                    value="united_kingdom"
                    control={<Checkbox />}
                    label="United Kingdom"
                  />
                  <FormControlLabel
                    value="united_states"
                    control={<Checkbox />}
                    label="United States"
                  />
                </FormGroup>
              </FormControl>
              <FormControl className="release_date" component="fieldset">
                <FormLabel component="legend">
                  <Typography style={{ color: "white" }} gutterBottom>
                    Release
                  </Typography>
                </FormLabel>
                <RadioGroup
                  className="film_type_option_list"
                  aria-label="realease_date"
                  name="realease_date"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                  />
                  <FormControlLabel
                    value="2020"
                    control={<Radio />}
                    label="2020"
                  />
                  <FormControlLabel
                    value="2019"
                    control={<Radio />}
                    label="2019"
                  />
                  <FormControlLabel
                    value="2018"
                    control={<Radio />}
                    label="2018"
                  />
                  <FormControlLabel
                    value="2017"
                    control={<Radio />}
                    label="2017"
                  />
                  <FormControlLabel
                    value="2016"
                    control={<Radio />}
                    label="2016"
                  />
                  <FormControlLabel
                    value="older"
                    control={<Radio />}
                    label="Older"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </CardContent>
          <CardActions className="filter__button">
            <Button
              variant="contained"
              color="secondary"
              className="most_viewed"
              startIcon={<FilterListIcon />}
            >
              Filter Movies
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  );
});

export default Filter;
