import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import PostPage from '../pages/PostPage';
import GalleryPage from '../pages/GalleryPage';
import GalleryUploadPage from '../pages/GalleryUploadPage';
import GalleryPhotoPage from '../pages/GalleryPhotoPage';

function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/diary" component={PostPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/gallery/upload" component={GalleryUploadPage} />
        <Route exact path="/gallery/:id" component={GalleryPhotoPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
