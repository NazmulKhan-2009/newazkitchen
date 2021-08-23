import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, styled } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
// import logo2 from '../../../../images/logo/logo-2.png'
import logo2 from '../images/logo/logo-2.png'
import Loader_style from './Utility.module.css'
// import StarsRating from 'stars-rating'
import StarRatings from 'react-star-ratings';
import './Utility.module.css'


const useStyles = makeStyles((theme) => ({
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchItem=({searchingFood})=>{
  const classes = useStyles();

const searchKey=(e)=>{
  searchingFood(e.target.value)
}

  return (
   
      <AppBar position="static">
        <Toolbar>
          
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Food…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              name="searchFood"
              onBlur={searchKey}
            />
          </div>
        </Toolbar>
      </AppBar>
   
  );
}


export const CustomizeLoader=()=>{


  return(
    <div className={Loader_style.container}>
      <img src={logo2} alt="" /> 

    </div>
  )

}



export const StarRated=({rating})=>{
  return (
    <StarRatings
      rating={rating?rating:0}
      starDimension="15px"
      starSpacing="2px"
      starRatedColor='red'
    />
  );;
  
  
  
}

export const StarMarking=({changeRating,rating})=>{

  return(

  <StarRatings
          // rating={rating}
          starRatedColor="red"
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="30px"
          starSpacing="3px"

        />
  )
}