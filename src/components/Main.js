import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import {GridList, GridTile} from 'material-ui/GridList';
import { Grid,Col,Row } from 'react-flexbox-grid';
const mockData = [{emoji: "Nancy",img: "https://robohash.org/adipisciinciduntrerum.bmp?size=50x50&set=set1"
}, {emoji: "Joe",
img: "https://robohash.org/undesaepesuscipit.png?size=50x50&set=set1"
}, {
emoji: "Adam",
img: "https://robohash.org/doloremaximeratione.png?size=50x50&set=set1"
}, {
emoji: "Maria",
img: "https://robohash.org/nemolaborecumque.bmp?size=50x50&set=set1"
}, {
emoji: "Emily",
img: "https://robohash.org/porroeiusveritatis.png?size=50x50&set=set1"
}, {
emoji: "Raymond",
img: "https://robohash.org/ipsumadipisciaperiam.png?size=50x50&set=set1"
}, {
emoji: "Raymond",
img: "https://robohash.org/estomnisassumenda.jpg?size=50x50&set=set1"
}, {
emoji: "Jerry",
img: "https://robohash.org/nondolorunde.jpg?size=50x50&set=set1"
}, {
emoji: "Roy",
img: "https://robohash.org/maximebeataedoloribus.bmp?size=50x50&set=set1"
}, {
emoji: "Carol",
img: "https://robohash.org/etsedquia.jpg?size=50x50&set=set1"
}, {
emoji: "John",
img: "https://robohash.org/quiomnissaepe.bmp?size=50x50&set=set1"
}, {
emoji: "Keith",
img: "https://robohash.org/sintmagnamqui.png?size=50x50&set=set1"
}, {
emoji: "Larry",
img: "https://robohash.org/nulladistinctionecessitatibus.png?size=50x50&set=set1"
}, {
emoji: "Christine",
img: "https://robohash.org/sapienteautdoloremque.png?size=50x50&set=set1"
}, {
emoji: "Katherine",
img: "https://robohash.org/quosvelitet.jpg?size=50x50&set=set1"
}, {
emoji: "Raymond",
img: "https://robohash.org/laborumeiuset.bmp?size=50x50&set=set1"
}, {
emoji: "Donald",
img: "https://robohash.org/distinctioculpatotam.bmp?size=50x50&set=set1"
}, {
emoji: "Virginia",
img: "https://robohash.org/assumendasuscipitquia.png?size=50x50&set=set1"
}, {
emoji: "Lisa",
img: "https://robohash.org/rerummoditempora.bmp?size=50x50&set=set1"
}, {
emoji: "Irene",
img: "https://robohash.org/quirepellenduset.jpg?size=50x50&set=set1"
}]




const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 450,
    overflowY: 'auto',
    marginBotton: 24,
  },
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
        <AppBar
          title="#PDXemoji"
          iconClassNameRight="mui-icon-search"
          />

          <div>
          <AutoComplete
            floatingLabelText="Search..."
            filter={AutoComplete.fuzzyFilter}
            dataSource={mockData.map((e,i) => e)}
            maxSearchResults={10}
            style={{width: '50%'}}
            />
          </div>
          <Grid>
          <Row>
          <Col xs={6} md={3}>HI</Col>
          </Row>
          </Grid>
          <div style={styles.root}>
          <GridList
            cols={4}
            cellHeight={200}
            padding={1}
            style={styles.gridList}
            >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                cols={4}
                rows={4}
                >
                <img src={tile.img}/>
                </GridTile>
              )
            )}
            </GridList>
            </div>
          );


          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
