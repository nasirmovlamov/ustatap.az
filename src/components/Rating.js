import React, { useState } from 'react'
import Rating1 from '@material-ui/lab/Rating';
function Rating(props) {
    const [valueR, setvalueR] = useState(4)

    return (
        <div className="stars"><Rating name="controlled"   defaultValue={valueR} onChange={(event , newValue) => setvalueR(newValue)}    /></div>
    )
}

export default Rating
