import React from 'react'
import { BiAbacus } from 'react-icons/bi';
import { allLanguage } from '../../alldata/course';
import { allCategories } from '../../alldata/index-4';

// `'Themeforest Standard':Archives: Courses`


const Hero = ({ view, blog, blog2, blog3, blogS, about, team, instructor, shop, singleShop, cartPage, searchPage, searchNone, contact, login, signup, forgot }) => {
    return (
        <>
            <section className="course-hero">
                <div className="container">
                    <h2>{
                        view === true ? 'Themeforest Standard' :
                        blog === 'blogStyle' ? 'Our Blog Posts' :
                        blog2 === 'blogStyle2' ? 'Our Blog Classic Posts' :
                        blog3 === 'blogStyle3' ? 'Our Blog Classic Posts' :
                        blogS === 'blogSingle' ? 'Interactively Morph High Standards Anding' :
                        about === 'about' ? 'About Our Edukon' :
                        team === 'team' ? 'All Team Members' :
                        instructor === 'instructor' ? 'All Best Instructors' :
                        shop === 'shop' ? 'Our Shop Pages' :
                        singleShop === 'singleShop' ? 'OUR SHOP SINGLE' :
                        cartPage === 'cartPage' ? 'Shop Cart' :
                        searchPage === 'searchPage' ? '4 Results found for: Business' :
                        searchNone === 'searchNone' ? 'Results Not found for: Business' :
                        contact === 'contact' ? 'Get In Touch With Us' :
                        login === 'login' ? 'Login Page' :
                        signup === 'signup' ? 'Register Now' :
                        forgot === 'forgot' ? 'Forgot Password' :
                        'Archives: Courses'
                    }</h2>
                    <p><span>Home</span> / {
                        view === true ? 'Course View' :
                        blog === 'blogStyle' ? 'Blog' :
                        blog2 === 'blogStyle2' ? 'Blog classic' :
                        blog3 === 'blogStyle3' ? 'Blog classic' :
                        blogS === 'blogSingle' ? 'Blog Detais' :
                        about === 'about' ? 'About' :
                        team === 'team' ? 'Team' :
                        instructor === 'instructor' ? 'instructor' :
                        shop === 'shop' ? 'Shop' :
                        singleShop === 'singleShop' ? 'Shop Details' :
                        cartPage === 'cartPage' ? 'Cart Page' :
                        searchPage === 'searchPage' ? 'Search Result' :
                        searchNone === 'searchNone' ? 'Search None' :
                        contact === 'contact' ? 'Contact Us' :
                        login === 'login' ? 'Login' :
                        signup === 'signup' ? 'Sign Up' :
                        forgot === 'forgot' ? 'forgot password' :
                        'Course Page'
                    }</p>
                </div>
            </section>
            <section className={`group-select-section ${view === true ? 'hidden' :
                    blog === 'blogStyle' ? 'hidden' :
                    blog2 === 'blogStyle2' ? 'hidden' :
                    blog3 === 'blogStyle3' ? 'hidden' :
                    blogS === 'blogSingle' ? 'hidden' :
                    about === 'about' ? 'hidden' :
                    team === 'team' ? 'hidden' :
                    instructor === 'instructor' ? 'hidden' :
                    shop === 'shop' ? 'hidden' :
                    singleShop === 'singleShop' ? 'hidden' :
                    cartPage === 'cartPage' ? 'hidden' :
                    searchPage === 'searchPage' ? 'hidden' :
                    searchNone === 'searchNone' ? 'hidden' :
                    contact === 'contact' ? 'hidden' :
                    login === 'login' ? 'hidden' :
                    signup === 'signup' ? 'hidden' :
                    forgot === 'forgot' ? 'hidden' :
                    ''}
                `}>
                <div className="container md:flex items-center">
                    <div className="icon-name flex items-center text-[1.125rem]">
                        <span className='mr-3'><BiAbacus /></span>
                        Filters
                    </div>
                    <form action="#" method='get' className={`grid sm:grid-cols-2 lg:grid-cols-4 w-full md:ml-4`}>
                        <select name="cars" id="cars">
                            <option value="volvo">All Catgeries</option>
                            {allCategories.map((item, ind) => {
                                return <option key={ind} value={item}>{item}</option>
                            })}
                        </select>
                        <select name="language" id="language">
                            {allLanguage.map((item, ind) => {
                                return <option key={ind} value={item.name}>{item.name}</option>
                            })}
                        </select>
                        <select name="price" id="price">
                            <option value="1">All Prises</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <select name="skill" id="skill">
                            <option value="1">All Skills</option>
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">PHP</option>
                            <option value="4">Laravel</option>
                            <option value="5">JAVASCRIPT</option>
                            <option value="5">PYTHON</option>
                            <option value="5">BOOTSTRAP</option>
                            <option value="5">REACT</option>
                        </select>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Hero
