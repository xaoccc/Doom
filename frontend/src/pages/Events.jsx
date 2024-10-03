export default function Events() {
    return (
        <main>
            <section className="blurbs" id="benefits">
                <div className="container">
                    <div className="row">
                        <div className="col-md center-xs">
                            <h2 className="section-title">Events</h2>
                        </div>
                    </div>
                    <div className="row margin-bottom-small center-xs">
                        <div className="col-md">
                            <img src="../../public/images/event-1.jpg" className="icon event-img" />
                            <h3>Deicide</h3>
                            <p>Support bands: Jungle Rot, Maltworm. Price: 70BGN</p>
                        </div>
                        <div className="col-md">
                            <img src="../../public/images/event-2.jpg" className="icon event-img" />
                            <h3>$uicideboy$</h3>
                            <p>Support bands: 100 Kila. Price: 80BGN</p>
                        </div>
                        <div className="col-md">
                            <img src="../../public/images/event-3.jpg" className="icon event-img" />
                            <h3>Mayhem</h3>
                            <p>Support bands: Bolg. Price: 100BGN</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newsletter">
                <div className="container">
                    <div className="row center-xs">
                        <div className="col-md ">
                            <h2>Our newsletter</h2>
                            <form className="flex center-xs">
                                <input placeholder="Enter Your Email" type="email" required="" name="" />
                                <button>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {
                localStorage.getItem('admin') === 'true' && (
                    <div className="adminPanel">
                        <button className="addEvent">Add Event</button>
                    </div>
                )
            }

        </main>
    )
}