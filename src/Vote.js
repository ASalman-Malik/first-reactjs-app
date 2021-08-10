import { useState } from "react";
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { Specification } from './Specification';
import { useStyle } from './App';

export function Vote({ brandName, model, specs, logo, image }) {
  const [like, setLike] = useState(0);
  const [dislike, disLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => disLike(dislike + 1);
  const [opened, setOpened] = useState(false);
  const classes = useStyle();
  return (
    <div className="Vote"
      style={{
        background: like >= dislike ? "#fff" : "#e2517e"
      }}>
      {/* <img className='logo' src={logo}></img>     */}
      {/* <h1>{brandName}</h1> */}
      {/* <CardMedia */}
      {/* // className={classes.media}
            // img={image}
            // title="Mobile Image"         
            // /> */}
      <img className={'phone-image'}
        src={image}
        alt="Mobile Model Snap"></img>
      <h4 className={'brand-model'}>{model}</h4>
      <Badge badgeContent={like} onClick={incrementLike} color="primary">
        👍
        </Badge><br></br>
      <Badge badgeContent={dislike} onClick={incrementDislike} color="error">
        👎
        </Badge>
      <Button
        onClick={() => setOpened(!opened)}
        variant="outlined"
        color="primary">
        SHOW
          {opened ? " LESS" : " MORE"}
      </Button>
      {opened ? <Specification specs={specs} /> : ""}
      {/* <IconButton aria-label="like" onClick={incrementLike}>👍{like}</IconButton>
            <IconButton aria-label="dislike" onClick={incrementDislike}>👎 {dislike}</IconButton><br></br> */}

    </div>
  );
}
