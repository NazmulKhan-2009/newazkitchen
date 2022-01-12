import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import { orderHandleImg } from '../../../CommonFunction';
import './OrderDataHistory.css';
import Dialogs from "../../../Cart/Dialog/Dialogs"
import { useState } from 'react';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row({item,handleDial,trnx}) {
  const { email,order_Time,orderId,order_status,delivery_Info,ordered_Data,payment_by,paymentCondition,purchasedInfo} = item;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const userInfo=JSON.parse(sessionStorage.getItem('userInfo')) 
  console.log(userInfo)

  const handlePaymentVerification=(purchasedInfo)=>{
    
    trnx(item)
    console.log(purchasedInfo)
    handleDial(true)
  }

  console.log(payment_by.trim(''))
  return (
    <>
      <TableRow className="table_row">
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center" >
          {orderId}
        </TableCell>
        <TableCell align="center" >{delivery_Info.totalPrice}</TableCell>
        <TableCell align="center">{payment_by} <button disabled={userInfo.accessAs==='admin' ? "" :"disabled"} onClick={()=>handlePaymentVerification(purchasedInfo)} style={{background:paymentCondition==="unverified" ? 'crimson':'blue',color:'white',padding:"1px 5px",borderRadius:"10px",border:"none",width:"80px"}}>{paymentCondition}<br/>{purchasedInfo?.transaction_No}</button></TableCell>

        

        <TableCell align="center" >{order_Time}</TableCell>
        <TableCell align="center"  className="order_img"><img src={orderHandleImg(order_status)} alt="" width="100%"/></TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} >
              <Typography variant="h6" gutterBottom component="div" align="center">
                Order Break Down
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className="cell_head">
                    <TableCell>Food</TableCell>                  
                    <TableCell align="left">Quantity</TableCell>
                    <TableCell >Unit price</TableCell>
                    <TableCell>Total price (BDT)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ordered_Data.map((item) => (
                    <TableRow key={item._id} className="history_data">
                      <TableCell align="left">
                      <img src={item.imageUrl} alt="" width="40%"/>
                      </TableCell>
                      <TableCell align="left">{item.quantity}</TableCell>
                      <TableCell align="left">{item.price}</TableCell>
                      <TableCell align="left">{item.quantity*item.price}</TableCell>
                      {/* <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
                    </TableRow>
                    
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function OrderDataHistory({orderHistoryData}) {

  const [open, setOpen] = React.useState(false);
  const [trnxData,setTrnxData]=useState({})

  const handleDial=(opn)=>{
    setOpen(opn)
  }
  const handleDisagree=(cl)=>{
    setOpen(cl)
  }

  const trnxInfo=(data)=>{
    setTrnxData(data)
  }

  const handleAgree=(forDialog,forSatus)=>{
    setOpen(forDialog)
    if(forSatus){
            
    }
   }
 //todo //console.log(orderHistoryData)
  return (
   <Grid container justify='space-around' className="order_his_cont">
      <Grid  item md={11} xs={11} sm={12} className="ord_his_large_screen">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table" >
            <TableHead>
              <TableRow>
                {/* <TableCell colSpan={1}/> */}
                <TableCell align="center" colSpan={2} className="table_cell" >Order Id</TableCell>
                <TableCell align="center" className="table_cell" >Total Price</TableCell>
                <TableCell align="center" className="table_cell" >Payment Method</TableCell>
                <TableCell align="center"  className="table_cell" >Date</TableCell>
                <TableCell align="center" className="table_cell" >Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderHistoryData.slice(0).reverse().map(item => (
                <Row key={item._id} item={item} handleDial={handleDial} trnx={trnxInfo}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
  <Dialogs

dial={open} 
      handleAgree={handleAgree}
      handleDisagree={handleDisagree}
      fromPayVerify="verifyDialog"
      dialogInfo={{
         title:`Verify The Transaction ${trnxData.purchasedInfo?.transaction_No}`,
         content:"",
         payment:`Total Amount ${trnxData.delivery_Info?.totalPrice}`,
         contentEnd:`Payee Number ${trnxData.purchasedInfo?.sentMobileAc}` ,
         btnYes:"yes",
         btnNo:"no",
         inputOption:"",
         purchaseDone:""
         }}
  />

      </Grid> 
   </Grid> 
  );
}
