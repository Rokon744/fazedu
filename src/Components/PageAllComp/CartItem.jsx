import React, { useState } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { productAllCategories } from '../../alldata/pages';


const CartItem = () => {
    const [item, setItem] = useState(productAllCategories.slice(0, 5))
    return (
        <section className="cart-style py-10 md:py-20">
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th className='max-md:hidden'>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody className='!text-start'>
                        {item.map((item) => {
                            const { id, image } = item
                            return <tr key={id} className='border-y py-8'>
                                <td className='flex items-center'>
                                    <div className="img-box">
                                        <img className='w-[85px] max-sm:w-[50px]' src={image} alt="" />
                                    </div>
                                    <span className='max-md:hidden hover:text-[#f16126]'><Link to={`/shop-single`}>Product Text Here</Link></span>
                                </td>
                                <td className='max-md:hidden'>$250</td>
                                <td>
                                    <form action="#" className='border inline-block'>
                                        <button className=' px-4 py-2'>-</button>
                                        <span className='border-x px-4 py-2'>3</span>
                                        <button className=' px-4 py-2'>+</button>
                                    </form>
                                </td>
                                <td>$750</td>
                                <td><RiDeleteBin5Line className='text-[red] text-[22px]' /></td>
                            </tr>
                        })}

                    </tbody>
                </table>
                <div className="apply-coupon mt-10">
                    <div className="coupon-inner lg:flex justify-between items-center max-lg:space-y-5">
                        <form action="#" method='get'>
                            <div className="inp-box">
                                <input type="text" placeholder='Coupon Code...' />
                                <button>Apply Coupon</button>
                            </div>
                        </form>
                        <div className="cat-button flex space-x-4">
                            <button className='border mr-7'>Update Cart</button>
                            <button className='border'>Procced To Cheackout</button>
                        </div>
                    </div>
                </div>
                <div className="shiping-calculate mt-10">
                    <div className="shiping-inner md:flex items-center justify-between">
                        <form action="#" method='get' className='w-full'>
                            <h2 className='mb-9'>Calculate Shipping</h2>
                            <select name="cars" id="cars">
                                <option value="volvo">United Kingdom (Uk) </option>
                                <option value="saab">Bangladesh</option>
                                <option value="mercedes">Pakisthan</option>
                                <option value="audi">India</option>
                                <option value="audi">Nepal</option>
                            </select>
                            <div className="second-box md:flex justify-between items-center mt-5 max-md:space-y-4">
                                <select name="cars" id="cars">
                                    <option value="volvo">United Kingdom (Uk) </option>
                                    <option value="saab">Bangladesh</option>
                                    <option value="mercedes">Pakisthan</option>
                                    <option value="audi">India</option>
                                    <option value="audi">Nepal</option>
                                </select>
                                <input type="text" placeholder='PostCode/ZIP' />
                            </div>
                            <button>Update Total</button>
                        </form>
                        <div className='cart-total w-full md:ml-8'>
                            <h2 className='mb-9'>Cart Total</h2>
                            <div className="cart-total space-y-3">
                                <p>Cart Subtotal <span>$ 0.00</span></p>
                                <p>Shipping and Handling <span>Free Shipping</span></p>
                                <p>Order Total <span>$ 2940.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartItem
