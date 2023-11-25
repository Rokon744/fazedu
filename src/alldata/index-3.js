// Features all images
import feature1 from './photos/Index-3/Features/01.png'
import feature2 from './photos/Index-3/Features/02.png'
import feature3 from './photos/Index-3/Features/03.png'
import feature4 from './photos/Index-3/Features/04.png'
import feature5 from './photos/Index-3/Features/05.png'
import feature6 from './photos/Index-3/Features/06.png'

// Course carowsel all images
import carousel1 from './photos/Index-3/Features/13.jpg'
import carousel2 from './photos/Index-3/Features/14.jpg'
import carousel3 from './photos/Index-3/Features/15.jpg'

// achievement all icons
import { HiUsers } from 'react-icons/hi';
import { FaUserGraduate, FaBell, FaRegClock } from 'react-icons/fa';

// Blog3 all images
import blog1 from './photos/Index-3/Blog/01.jpg'
import blog2 from './photos/Index-3/Blog/02.jpg'
import blog3 from './photos/Index-3/Blog/03.jpg'

// clients all images
import client1 from './photos/Index-3/Clients/01.jpg'
import client2 from './photos/Index-3/Clients/02.jpg'
import client3 from './photos/Index-3/Clients/03.jpg'

// footer all icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';


export const coursesCategories = ['All Courses', 'Forms and Admision materials', 'Professional Courses', 'Course Outline', 'Policy', 'FAQs', 'Online Course']
export const qLinkCategories = ['Summer Sessions', 'Events', 'Gallery', 'Forums', 'Privacy Policy', 'Terms of Use']

export const footerAllCategories = [
    {
        id:1,
        Icon: FaFacebookF,
        bgColor: '#3b5998'
    },
    {
        id:2,
        Icon: FaTwitter,
        bgColor: '#55acee'
    },
    {
        id:3,
        Icon: FaLinkedinIn,
        bgColor: '#007bb5'
    },
    {
        id:4,
        Icon: FaInstagram,
        bgColor: '#e4405f'
    },
    {
        id:5,
        Icon: FaPinterestP,
        bgColor: '#bd081c'
    }
]


export const clientsCategories = [
    {
        id: 1,
        image: client1,
        name: 'Angel Mili'
    },
    {
        id: 2,
        image: client2,
        name: 'Rajib Raj'
    },
    {
        id: 3,
        image: client3,
        name: 'Umme Nishat'
    },
    {
        id: 4,
        image: client1,
        name: 'Angel Mili'
    },
    {
        id: 5,
        image: client2,
        name: 'Rajib Raj'
    },
    {
        id: 6,
        image: client3,
        name: 'Umme Nishat'
    }
]

export const blogCategories = [
    {
        id: 1,
        image: blog1,
        title: 'Learn Basic Web Design with HTML and CSS',
        name: 'Ummi Nishat'
    },
    {
        id: 2,
        image: blog2,
        title: 'Scottish Creatives To Receive Funded Business.',
        name: 'Begrass Tyson'
    },
    {
        id: 3,
        image: blog3,
        title: 'Learn Basic Web Design with PHP and Laravel',
        name: 'Rajib Raj'
    },
]

export const eventCategories = [
    {
        id: 1,
        count: 13,
    },
    {
        id: 2,
        count: 15,
    },
    {
        id: 3,
        count: 18,
    },
    {
        id: 4,
        count: 25,
    }
]

export const achievement3 = [
    {
        id: 1,
        count: '12600+',
        detail: 'Students Enrolled',
        bgColor: '#f16126',
        Icon: HiUsers
    },
    {
        id: 2,
        count: '50+',
        detail: 'Certified Trainer',
        bgColor: '#26c976',
        Icon: FaUserGraduate
    },
    {
        id: 3,
        count: '350+',
        detail: 'Professional Courses',
        bgColor: '#ea4c89',
        Icon: FaBell
    },
    {
        id: 4,
        count: '50+',
        detail: 'Years of Experience',
        bgColor: '#1769ff',
        Icon: FaRegClock
    }
]

export const carouselCategories = [
    {
        id: 1,
        title: 'Web Design',
        price: '$199',
        image: carousel1
    },
    {
        id: 2,
        title: 'PHP',
        price: 'Free',
        image: carousel2
    },
    {
        id: 3,
        title: 'English',
        price: '$199',
        image: carousel3
    },
    {
        id: 4,
        title: 'Web Design',
        price: '$199',
        image: carousel1
    },
    {
        id: 5,
        title: 'PHP',
        price: 'Free',
        image: carousel2
    },
    {
        id: 6,
        title: 'English',
        price: '$199',
        image: carousel3
    },
]

export const featureCategories = [
    {
        id: 1,
        title: `Book & Library Facelities`,
        image: feature1
    },
    {
        id: 2,
        title: 'Online & Offline Courses',
        image: feature2
    },
    {
        id: 3,
        title: 'Certification After Course Complete',
        image: feature3
    },
    {
        id: 4,
        title: 'Professional and Ingenious Instructor',
        image: feature4
    },
    {
        id: 5,
        title: 'Air Condition Class Room',
        image: feature5
    },
    {
        id: 6,
        title: 'Best Industry Leader',
        image: feature6
    }
]