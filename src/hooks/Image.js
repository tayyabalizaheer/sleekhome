import React, { useEffect, useState } from 'react';

export default function Image(props) {
    const [importImg , setImg] = useState("");
    useEffect(() => {
        const { path } = props;
        import(`../assets/images/${path}`).then(img => {
            setImg(img.default);
        });
    }, [props])
    
  return (
      <img alt="" className="img-responsive" src={importImg} />
  )
}
