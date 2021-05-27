// import React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function CircularProgressWithLabel(props) {
//   return (
//     <Box position="relative" display="inline-flex">
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         top={0}
//         left={0}
//         bottom={0}
//         right={0}
//         position="absolute"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         {/* <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
//           props.value,
//         )}%`}</Typography> */}
//         <Typography variant="caption" component="div" color="textSecondary">{`${props.value.toFixed(2)}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function OrderStatus() {
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + .01));
//     }, 100);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }

import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import WaitingOrder from '../../../Cart/Cart/WaitingOrder';
import { orderHandleImg } from '../../../CommonFunction';

const OrderStatus = () => {
  const {orderInfo}=useContext(UserContext)


// const orderHandleImg=()=>{
//   let OrderStatusImg;
//   if(orderInfo.order_status==='processing'){
//     OrderStatusImg="https://media.tenor.com/images/80072d4e3513d5e9858ba0e7df572d12/tenor.gif"
//   }else if(orderInfo.order_status==='shipping'){
//     OrderStatusImg="https://media1.giphy.com/media/kEixMotX2m7eycR8BG/giphy.gif"
//   }else if(orderInfo.order_status==='delivered'){
//     OrderStatusImg="https://thumbs.dreamstime.com/b/l-homme-d-porte-la-bo%C3%AEte-en-carton-vide-30658267.jpg"
//   }
// return OrderStatusImg

// }
  
  return (
    <WaitingOrder
      info={{width:'100%',text:"Order Status",img:orderHandleImg(orderInfo.order_status)}}
    />
  );
};

export default OrderStatus;