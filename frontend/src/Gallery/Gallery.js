import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Gallery.action';
import {Link} from 'react-router';

class Gallery extends React.Component{
componentDidMount() {
  this.props.getGallery();
}

  render(){

    let category = ''

    let toaster = ''


    if (this.props.category.length !== 0){

      category = this.props.category.map((categories, idx) =>
      <div>
        <div key={idx} className="category" >
          <h2>
            {categories.toUpperCase()}
          </h2>
        </div>
        <div>
          {this.props.tables[categories].map((tables, idx2) =>
              <div  key={idx2} className="table_gallery">
              <Link className="imageAndName" to={"/tables/" + tables.id}>
                <button className="join_table_button">Join Table</button>
              </Link><br/><br/>
              Table Name: {'  '+tables.tablename} <br/>
               Ai Chips: {tables.aichips}<br/>
              Win Chance Display: {tables.probability_assist}

              </div>

            )}
        </div>
      </div>
      )
    }
    return(
      <div>
      <h1>
      Tables
      </h1>
      <h3>
      {category}
      </h3>
      {toaster}
      </div>
    );
  }
}

const GalleryContainer = ReactRedux.connect(
  state=>({
    index: state.galleryIndex.index,
    tables: state.galleryIndex.tables,
    category: state.galleryIndex.category
  }),
  actions
)(Gallery);

export default GalleryContainer;
