import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = () => {
      const {dishId} = useParams();
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
          // <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))} />
      );
    };

    return (  
      <div>
        <Header />
          <Routes>
            <Route exact path='/home' Component={HomePage} />
            <Route exact path='/aboutus' Component={() => <About leaders={this.state.leaders} /> } />
            <Route exact path='/menu' Component={() => <Menu dishes={this.state.dishes}/>} />
            <Route path='/menu/:dishId' Component={DishWithId} />
            <Route exact path='/contactus' Component={Contact} />
            <Route  path='*' Component={HomePage} />
          </Routes>
        <Footer />
      </div>
    );
  }
}


export default Main;

