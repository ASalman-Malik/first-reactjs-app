import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Vote } from './Vote';

export function Brands() {
  const brands = [
    {
      id: 1,
      image: "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_256,w_256/v1611746413/Croma%20Assets/Communication/Cases%20and%20Covers/Images/232074_orxxn7.png",
      name: "Samsung", model: "s21Ultra",
      logo: "https://img.icons8.com/color/144/000000/samsung.png",
      specs: {
        os: 'Android',
        processor: 'SD880',
        ram: "32GB",
        storage: '256GB',
        display: 'sAMOLED',
      }
    },
    {
      id: '12edea',
      image: 'https://www.blitzmicro.eu/11127-medium_default/AP-MGED3QLA.jpg',
      name: "Apple", model: "12 Mini",
      logo: 'https://img.icons8.com/ios-filled/144/000000/mac-os.png',
      specs: {
        os: 'iOS',
        processor: 'A7',
        ram: "8GB",
        storage: '256GB',
        display: 'Retina Display',
      }
    },
    {
      id: '12edeshfa',
      image: 'https://www.blitzmicro.eu/11127-medium_default/AP-MGED3QLA.jpg',
      name: "Apple", model: "12 Pro Max",
      logo: 'https://img.icons8.com/ios-filled/144/000000/mac-os.png',
      specs: {
        os: 'iOS',
        processor: 'A7',
        ram: "8GB",
        storage: '256GB',
        display: 'Retina Display',
      }
    },
    {
      id: '12eddffewdea',
      image: 'https://www.blitzmicro.eu/11127-medium_default/AP-MGED3QLA.jpg',
      name: "Realme", model: "X2 Pro",
      logo: 'https://img.icons8.com/ios-filled/144/000000/mac-os.png',
      specs: {
        os: 'Android',
        processor: 'SD 720G',
        ram: "6GB",
        storage: '128GB',
        display: 'sAMOLED',
      }
    },
    {
      id: '12ergs24edea',
      image: 'https://www.blitzmicro.eu/11127-medium_default/AP-MGED3QLA.jpg',
      name: "Realme", model: "X7 Pro",
      logo: 'https://img.icons8.com/ios-filled/144/000000/mac-os.png',
      specs: {
        os: 'Android',
        processor: 'SD855+',
        ram: "8GB",
        storage: '256GB',
        display: 'sAMOLED',
      }
    },
    {
      id: '12e1efseg4dea',
      image: 'https://www.blitzmicro.eu/11127-medium_default/AP-MGED3QLA.jpg',
      name: "Xiome", model: "Note 9 Pro",
      logo: 'https://img.icons8.com/ios-filled/144/000000/mac-os.png',
      specs: {
        os: 'Android',
        processor: 'SD730G',
        ram: "8GB",
        storage: '128GB',
        display: 'LCD',
      }
    },
    {
      id: '23khfd',
      image: 'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_256,w_256/v1605277125/Croma%20Assets/Communication/Mobiles/Images/8943198830622.png',
      name: "OnePlus", model: "7 Pro",
      logo: 'https://d2xqxjfvpb1oa6.cloudfront.net/eyJidWNrZXQiOiJpbnZpdGF0aW9udXBsb2FkcyIsImtleSI6Imludml0YXRpb24uYXBwLm9uZXBsdXMuY29tLXByb21vLWNvZGVzXzY2MDJlZi5jb20iLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI1NiwiaGVpZ2h0IjoyNTYsImZpdCI6ImNvbnRhaW4iLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9fX0=',
      specs: {
        os: 'Android',
        processor: 'SD885',
        ram: "8GB",
        storage: '128GB',
        display: 'sAMOLED',
      }
    }
  ];
  // const models = ['s21 Ulrta', '12 Mini']
  /* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <h1>Hello</h1>
    <button>Click me...</button>
  </header> */
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));
  const classes = useStyles();
  const [search, setSearch] = useState("");
  return (
    <div className={'brands'}>

      <TextField
        onChange={(event) => setSearch(event.target.value)}
        label="Search"
        id="outlined-margin-dense"
        // defaultValue="Default Value"
        className={classes.textField}
        // helperText="Some important text"
        margin="dense"
        variant="outlined" />
      {search}

      {brands.filter(((brands) => brands.model.toLowerCase().includes(search.toLocaleLowerCase()))).map(({ name, model, specs, logo, id, image }) => (<Vote key={id} brandName={name} model={model} specs={specs} logo={logo} image={image} />))}

      {/* {mobiles.map((mobile)=> <Specs/>)} */}
      {/* <Vote brandName = "Samsung" model = "s21 ultra"/>
            <Vote brandName = "Apple" model = "12 mini"/>
            <Vote brandName = "Realme" model = "X7 5G"/>
            <Vote brandName = "Oppo" model = "A7"/>
            <Vote brandName = "Nokia" model = "Lumia 730"/>
            <Vote brandName = "Sony" model = "Xpress Music"/>
            <Vote brandName = "MI" model = "Note 10 Pro"/> */}
    </div>
  );

}
