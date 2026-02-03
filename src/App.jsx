import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import ProductDetail from './pages/ProductDetail';
import InnovationPipeline from './pages/InnovationPipeline';
import PipelineDetail from './pages/PipelineDetail';

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/innovation" element={<InnovationPipeline />} />
          <Route path="/innovation/:id" element={<PipelineDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
