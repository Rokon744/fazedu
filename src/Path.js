import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home, Index_2, Index_3, Index_4, Index_5, Index_6, Index_7 } from './pages/Home';
import { Cource, Cource_view, Cource_single } from './pages/Cources'
import { Blog, Blog_2, Blog_3, Blog_single } from './pages/Blogs'
import { About, Shop_cart, Error404, Instructor, Search_none, Search_page, Shop_single, Shop, Team} from './pages/AllPages'
import { Contact, Signup, Login, Team_single, Forgot } from './pages'
import { HelpCenter, Privacy, Terms } from './pages/Footer';

const Path = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/index-2' element={<Index_2 />} />
            <Route path='/index-3' element={<Index_3 />} />
            <Route path='/index-4' element={<Index_4 />} />
            <Route path='/index-5' element={<Index_5 />} />
            <Route path='/index-6' element={<Index_6 />} />
            <Route path='/index-7' element={<Index_7 />} />
            <Route path='/cource' element={<Cource />} />
            <Route path='/cource-single' element={<Cource_single />} />
            <Route path='/cource-view' element={<Cource_view />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog-2' element={<Blog_2 />} />
            <Route path='/blog-3' element={<Blog_3 />} />
            <Route path='/blog-single' element={<Blog_single />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/instructor' element={<Instructor />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart-page' element={<Shop_cart />} />
            <Route path='/shop-single' element={<Shop_single />} />
            <Route path='/search-none' element={<Search_none />} />
            <Route path='/search-page' element={<Search_page />} />
            <Route path='/*' element={<Error404 />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/help-center' element={<HelpCenter />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/team-single' element={<Team_single />} />
        </Routes>
    )
}

export default Path
