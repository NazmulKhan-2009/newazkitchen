import React, { useState } from 'react';
import { AdminForm } from '../commonClass/CommonClass';
import ControlDialog from '../ControlDialog/ControlDialog';

export default function OrderController({openDial,closeDialog}) {

  const [dial, setDial]=useState(openDial)
  const handleDialog=(isClose)=>{
    setDial(isClose)
   }
  const adminForm={
    field0:new AdminForm("orderId","Order Id","standard","orderId")
   }

  return (
   <ControlDialog
     dial={dial}
      handleDialog={handleDialog}
      adminForm={adminForm}
      formTitle={"orderControl"}
   />
  )
}
