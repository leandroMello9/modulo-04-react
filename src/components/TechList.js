import React,{Component} from 'react';
import TechItem from './TechItem'
class TechList extends Component {

  state={
     newTech: '',
     techs: []
   };
   //Executado assim que o componente aparece em tela
   componentDidMount() {
    
    const techs = localStorage.getItem('techs');
    if(techs) {
      this.setState({ techs: JSON.parse(techs)})
    }
   }
   //Executado sempre que houver alterações nas props ou estado
   componentDidUpdate(_, prevState) {
    // this.props = novas propriedades
    //this.state = novos estados
    if(prevState.techs != this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }


   }
   //Executado quando o componente deixa de existir
   componentWillMount() {

   }
   handleInputChange = tech => {
    
     this.setState({ newTech : tech.target.value})
      
   }
   handleSubmit = event => {
     event.preventDefault();
     console.log(this.state.newTech)
     this.setState(
       {techs: [...this.state.techs, this.state.newTech],
        newTech: ''
      })
      localStorage.setItem()
    }
    handleDelete = tech => {
      this.setState({ techs: this.state.techs.filter(element => element != tech)})
      
    }
      
  render(){
    
    return(
      <form onSubmit={this.handleSubmit}>
        
        <ul>
        {this.state.techs.map(element =>
        <TechItem
         element = {element} 
         key = {element} 
         handleDelete={this.handleDelete}/>)}
         <TechItem/>
        
        </ul>
        <input 
        type="text" onChange= {this.handleInputChange} 
       value= {this.state.newTech} />
       <button type= "submit">Register new Tech</button>
      
      </form>
    )
  }
}

export default TechList;