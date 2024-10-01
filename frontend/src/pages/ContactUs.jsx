export default function ContactUs() {
    return (
        <section className="contact" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md center-xs">
                            <h2 className="section-title">Contact</h2>
                        </div>
                    </div>
                    <div className="row margin-bottom-small center-xs">
                        <div className="col-md">Call Us<br/>+49 561 0000 0000</div>
                        <div className="col-md">Address<br/>Streetname 12</div>
                        <div className="col-md">Email<br/>kontakt@lautenschlager.de</div>
                    </div>
                    <form action="">
                        <div className="row margin-bottom-small center-xs">

                            <div className="col-md padding-small">
                                <div className="row">
                                    <div className="col-md">
                                        <input placeholder="Enter Your Name" type="text" name="" value="" className="margin-bottom-small" />
                                        <input placeholder="Enter Your Email" type="email" name=""  value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md padding-small">
                                <textarea placeholder="Your Message" name="" rows="8" className="margin-bottom-small"></textarea>
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
    );
}
            
