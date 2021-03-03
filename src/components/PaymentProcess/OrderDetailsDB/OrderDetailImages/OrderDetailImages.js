import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: 250,
    overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
  },
  // gridList: {
  //   width: 400,
  //   height: 250,
  // },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function OrderDetailImages({orderInfo}) {
  const classes = useStyles();

  // if(orderInfo.delivery_Info){
  //  var {name,address,gender,contact,totalPrice}=orderInfo.delivery_Info
  // }

  return (
    <>
    {orderInfo ? <div className={classes.root}>
      <GridList cellHeight={80} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </GridListTile>
        {orderInfo.ordered_Data && orderInfo.ordered_Data.map(item => (
          <GridListTile key={item._id}>
            <img src={item.imageUrl} alt={item.foodTitle} />
            {/* <GridListTileBar
              title={item.foodTitle}
              subtitle={<span>Quantity: {item.quantity}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.foodTitle}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            /> */}
            <GridListTileBar                          
              actionIcon={
                <IconButton aria-label={`info about ${item.foodTitle}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />

          </GridListTile>
        ))}
      </GridList>
    </div> :"Nothing upload In Database"}
    </>
  );
}
