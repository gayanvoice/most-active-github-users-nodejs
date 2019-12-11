
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export function DatePipeComponent({isRender,modified}) {
    return (
        !isRender ? <CircularProgress color="secondary" /> : <caption>Last modified {new Date(modified).toUTCString()}</caption>
        
    )
  }


          