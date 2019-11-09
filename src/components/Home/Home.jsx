import React, { Component } from "react";
import { get } from "axios";
import "../../boostrap.css";
import "../Home/Home.css";
import Card from "../Card/Card";
import Item from '../Item/Item'

export default class Home extends Component {
  componentDidMount = () => {
    get("/")
      .then(res => {})
      .catch(err => {
        this.props.history.push("/register");
      });
  };
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            aria-expanded="false"
            aria-controls="navbarColor01"
            aria-label="Toggle navigation"
            type="button"
            data-target="#navbarColor01"
            data-toggle="collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-container mb-5r">
          <div className="jumbotron bg-light h-100 main-content">
            {/* <Card /> */}
            <div className="container text-center">
              <h1 className="font-weight-bold text-light">
                Welcome to The Store
              </h1>
              <h3 className="text-light welcome-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                alias nulla atque quod ut! Saepe dicta dolorem minima,
                cupiditate rem, dolorum necessitatibus nihil incidunt natus
                suscipit consequuntur amet soluta, unde laborum architecto.
                Repudiandae sed debitis nisi eligendi laudantium hic minima
                minus aut id odit repellat aliquam deserunt eaque, quas
                suscipit..
              </h3>
              <button className="btn btn-primary btn-lg m-3">
                Start Shopping
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <Card
                img="https://static.thenounproject.com/png/18095-200.png"
                title="Always in Stock"
                text="gmfe,dafl kre,mf4re mgnkrgnbgr,m bngbtconsectetur adipisicing elit. Modi assumenda consequatur nam harum impedit rem, nesciunt illo ullam, officia, vero atque. "
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <Card
                img="https://www.freeiconspng.com/uploads/truck-icon-0.png"
                title="Just Arrived"
                text="ehkt, hthmt,eLo rem ipsum dolor sit amet, consectetur adipisicing elit. Modi assumenda consequatur nam harum impedit rem, nesciunt illo ullam, officia, vero atque. "
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <Card
                img="https://cdn.pixabay.com/photo/2017/06/26/20/33/icon-2445095_960_720.png"
                title="We Love"
                text=".mferhkletjhmlktr mheklythgLorem ipsum dolor sit amet, consectetur adipisicing elit. Modi assumenda consequatur nam harum impedit rem, nesciunt illo ullam, officia, vero atque. "
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <Card
                img="https://www.searchpng.com/wp-content/uploads/2019/02/Shopping-Cart-PNG-Icon.png"
                title="Always in Stock"
                text="vj krwefjdk lremflke rLorem ipsum dolor sit amet, consectetur adipisicing elit. Modi assumenda consequatur nam harum impedit rem, nesciunt illo ullam jighij nbgb rkwjnvfkjbr "
              />
            </div>
          </div>
        </div>
        <div className="jumbotron mb-0 bg-info text-light text-center">
          <h1>Shoes for each part of the year</h1>
          <p className="lead">
            We've got you covered for each season... except winter spring and
            summer. We actually only have fall shoes
          </p>
        </div>

        {/* </div> */}
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            {/* <div className="col-sm-12 col-md-6"> */}
            <img
              className="col-sm-12 col-md-6"
              src="https://assets.ecenglish.com/blogs/uploads/sites/17/2015/12/fall_wallpaper_706h.jpg"
              alt=""
            />
            {/* </div> */}
            <div className="col-sm-12 col-md-6 d-flex flex-column text-center align-items-center justify-content-center">
              <h1>Autumn Collection</h1>
              <h4 className="text-bold">________</h4>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectia blanditiis rem laudantium!
                Perferendis, corporis maiores!
              </p>
              <button className="btn btn-md btn-primary collections-btn">
                View Collections
              </button>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                className = 'flip-card'
                src="https://assets.ecenglish.com/blogs/uploads/sites/17/2015/12/fall_wallpaper_706h.jpg"
                alt="Avatar"
                style={{ width: "300px;", height: "300px;" }}
              />
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        {/* --------- */}
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-sm-12 col-md-6 d-flex flex-column text-center align-items-center justify-content-center order-2 order-xs-2 order-sm-2 order-md-1">
              <h1>Winter Collection</h1>
              <h4 className="text-bold">________</h4>
              <p className="text-muted">
                Lorem ipsum, dolor sit amet consectia blanditiis rem laudantium!
                Perferendis, corporis maiores!
              </p>
              <button className="btn btn-md btn-primary collections-btn">
                View Collections
              </button>
            </div>
            <img
              className="col-sm-12 col-md-6 col-lg-6 order-sm-1 order-md-2 p-0"
              src="http://s1.picswalls.com/wallpapers/2014/02/08/winter-picture_033824424_27.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="jumbotron bg-light text-center">
          <h5 className="text-muted">We have something for everyone</h5>
          <h1 className="text-bold">OUR NEW COLLECTION</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <Item img="https://s7d1.scene7.com/is/image/MoosejawMB/10243945x1123174_zm?$product1000$" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-0">
              <Item img="https://s7d1.scene7.com/is/image/MoosejawMB/10290187x1088054_zm?$product1000$" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <Item img="https://www.georgiaboot.com/on/demandware.static/-/Sites-Master-Product-catalog-en/default/dwc2586429/images/GB00207_EXTRALARGE.jpg" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <Item img="http://content.backcountry.com/images/items/900/MAM/MAM00OS/BARTP.jpg" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <Item img="https://s7d1.scene7.com/is/image/MoosejawMB/10290187x1088054_zm?$product1000$" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <Item
                img="https://www.apsltd.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/M/S/MSFUFT006-dynamic-pro-II-shoe-platinum-side-angle.jpg
"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
