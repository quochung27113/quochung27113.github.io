import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormApp from './Components/Form'
import TableApp from './Components/TableApp'
import {Component} from 'react';
import Search from "./Components/Search"
import randomstring from 'randomstring'
import { Route, Switch } from 'react-router-dom';
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Home from './Pages/Home'

class App extends Component {
  constructor(){
    super();
    this.state= {
      dataApp:[],
      itemSelected: {},
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('data')) {
      localStorage.setItem(
        "data", 
        JSON.stringify([
          {
            id:randomstring.generate(3), 
            username: "test", 
            name:'Nam', 
            age: 30, 
            classNameApp: "A123"
          },
          {
            id:randomstring.generate(3),
            username: "test", 
            name:'Nam1', 
            age: 20, 
            classNameApp: "A123",
          },
          {
            id:randomstring.generate(3),
            username: "test", 
            name:'Nam2', 
            age: 25, 
            classNameApp: "A123",
          },
        ])
      );
    }
    this.setState({
      dataApp: JSON.parse(localStorage.getItem("data")),
    });
  }
  
  handleEdit = (id) => {
    // console.log(id);
    let item = this.state.dataApp.find((item) => {
      // console.log(item);
      return item.id === id;
    });
    console.log(item);
    this.setState({
      itemSelected : item
    });
  };

  submitForm = (data) => {
    // console.log('parent',data);
    const newData = [...this.state.dataApp];
    newData.push(data);
    console.log(newData)
    this.setState({
      dataApp: newData
    });
    localStorage.setItem('data', JSON.stringify(newData))
  }

  search = (keyword) => {
    // console.log(keyword)
    const itemSearch = this.state.dataApp.filter((item) => {
      return item.name === keyword
    })
    console.log(itemSearch.length >0)
    if (itemSearch) {
      this.setState({
        dataApp: itemSearch
      })
    }
    else {
      this.setState({
        dataApp: JSON.parse(localStorage.getItem("data")),
      });
    }

  }

  render() {
    const {dataApp, itemSelected} = this.state;
    
    return (
      <div className="App">
        {/* <Container>
              <FormApp submitForm={this.submitForm} itemSelected={itemSelected}></FormApp>
              <Search search={this.search}/>
              <div className="mt-5">
                  <TableApp dataApp={dataApp} handleEdit={this.handleEdit}></TableApp>
              </div>
          </Container> */}
          <a href='/about'>AAbout</a>
          <a href='/contact'>CContact</a>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

          </Switch>
          
      </div>
    );
  }
}

export default App;
