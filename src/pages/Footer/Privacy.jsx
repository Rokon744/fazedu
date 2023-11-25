import React, { useState } from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Homes/Footer'

const Privacy = () => {
    const [term, setTerm] = useState(false)
  return (
    <>
        <Navbar />
        <section className="privacy-section  py-28 md:py-40">
            <div className="container">
                <div className="privacy-header">
                    <h4>{
                        term?'Terms & Condition': 'Privacy Policy'
                    }</h4>
                </div>
                <div className="privacy-inner md:w-[750px] p-5 m-auto">
                    <h4>{term?'Our Tearms Commitment':'Our Privacy Commitment'}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, omnis temporibus nulla dolorem esse voluptatum repellendus voluptate quam sequi at id natus modi ex deleniti odit sunt iste reiciendis quasi consectetur. Fugiat exercitationem dolor animi nam excepturi nostrum sapiente delectus tempore enim amet. Vero culpa omnis esse, soluta officiis eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quisquam est molestiae architecto repellat libero fuga modi ad veniam alias?</p>
                    <h4>What Information We Collect..!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat tempore, similique suscipit laborum excepturi nam, veritatis natus fugiat, praesentium alias! Ducimus error, veniam suscipit commodi distinctio earum voluptas molestias qui nemo molestiae officia, numquam iste rem deleniti. Nobis quis, consequatur nemo necessitatibus, incidunt dolorem vitae officiis, fuga exercitationem repudiandae ad labore modi nam harum officia ullam et fugit quos voluptatibus. Harum nesciunt dolore eveniet quia distinctio magni laboriosam neque sint. Harum ratione quae natus eius non, beatae esse et velit modi dolorem praesentium sequi! Vitae a iusto quibusdam eos temporibus, tenetur, suscipit itaque enim eum accusamus omnis, unde tempora.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique culpa repudiandae explicabo consectetur natus quibusdam unde porro ullam aliquid dignissimos fugit quasi beatae adipisci, reiciendis a facilis, veniam sequi eveniet impedit! Distinctio soluta, fugit laboriosam nam quaerat esse temporibus nostrum dolore similique mollitia, error odio neque dignissimos! Porro nihil, accusamus voluptatem eligendi suscipit nulla cupiditate beatae molestias, quod hic adipisci animi. Ab, est repellendus rem dolores sequi fugit, aliquid ea quibusdam vel incidunt adipisci? Esse, expedita, consequatur perferendis maxime repudiandae quam quidem tenetur quos ab aliquam commodi accusamus quibusdam adipisci dicta itaque reiciendis sapiente cumque sed similique consectetur aspernatur! Officiis nemo dicta sint similique eveniet quibusdam, quis nesciunt. Asperiores molestiae dignissimos atque magnam sit sunt quibusdam officia! Repellendus fuga provident deserunt temporibus neque repellat, dolor possimus obcaecati tenetur perferendis corporis rem praesentium ullam voluptas cum nobis voluptatem architecto rerum eveniet aperiam asperiores. Veritatis doloremque excepturi reprehenderit, nulla fugit ipsa nemo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci ipsum inventore impedit accusantium cupiditate, quam nemo facere natus quis corrupti consequuntur quibusdam incidunt corporis. Fugit suscipit reprehenderit ab perferendis accusantium consectetur obcaecati, voluptatum tempore a autem? Neque officia quam unde dolores esse. Aut animi vitae facilis, aperiam harum accusamus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad porro eligendi! Dolore excepturi explicabo eum voluptatem qui vel soluta labore dignissimos, laboriosam odio blanditiis! Omnis inventore officia distinctio reprehenderit!</p>
                    <h4>How We Collect Information..!</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, illo! Accusamus, eos. Quaerat molestias ipsam modi excepturi fugit laboriosam voluptates atque repellat nemo aliquam sit minus rerum voluptate id assumenda ut cumque, omnis natus cupiditate quidem officiis eius! Porro, sed.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore doloribus dolorum dolorem repellat debitis reprehenderit voluptas animi, eos cum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quibusdam ipsum a at fugiat perferendis repellat voluptates modi id inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nulla!</p>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Privacy
