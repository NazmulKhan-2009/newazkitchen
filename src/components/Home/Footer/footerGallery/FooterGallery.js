


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// import itemData from './itemData';
import gal1 from '../../../../images/blogimg/blackberry.jpg'
import gal2 from '../../../../images/blogimg/blueberry.jpg'
import gal3 from '../../../../images/blogimg/cantaloupe.jpg'
import gal4 from '../../../../images/blogimg/grapes.jpg'
import gal5 from '../../../../images/blogimg/green-apple.jpg'
import gal6 from '../../../../images/blogimg/kiwi.jpg'
import gal7 from '../../../../images/blogimg/on-diet.png'
import gal8 from '../../../../images/blogimg/new-chills.png'
import gal9 from '../../../../images/blogimg/strwberry-delights.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 const itemData = [
     {
      img: gal1,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
     img: gal2,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: gal3,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
   img: gal4,
   title: 'Image',
   author: 'author',
   cols: 2,
 },
 {
  img: gal5,
  title: 'Image',
  author: 'author',
  cols: 2,
},
{
 img: gal6,
 title: 'Image',
 author: 'author',
 cols: 2,
},
{
 img: gal7,
 title: 'Image',
 author: 'author',
 cols: 2,
},
  ];
export default function FooterGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
