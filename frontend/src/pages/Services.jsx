export default function Services() {
  return (
    <section className="services" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 center-xs">
                        <h2 className="section-title">Services</h2>
                    </div>
                </div>
                <div className="row icon-row">
                    <div className="col-xs center-xs">
                        <img src="../../public/images/service-1.jpg" className="icon icon service-img" /><br/>
                        Music Events
                        <p>We offer the ultimate destination for fans of extreme music! Immerse yourself in a night of death metal, thrash metal, gangsta rap, hard bass, hard techno, and gabba and many more. With electrifying performances, a pulsating dance floor, and a bar serving devilishly crafted cocktails, experience a night where chaos reigns and the beats never stop. Join us if you dare!</p>
                    </div>
                    <div className="col-xs center-xs">
                        <img src="../../public/images/service-2.webp" className="icon service-img" /><br/>
                        BetZone
                        <p>Step into the thrilling world of sports betting at BetZone, where excitement meets opportunity! Our state-of-the-art venue offers an immersive experience for betting enthusiasts and sports lovers alike. With multiple large screens broadcasting live events, you won't miss a moment of the action!</p>
                    </div>
                    <div className="col-xs center-xs">
                        <img src="../../public/images/service-3.webp" className="icon service-img" /><br/>
                        Strip Club
                        <p>A haven for those who crave the forbidden, our temple of indulgence is bathed in crimson light. Here, the occult meets sensuality, a world where gothic elegance intertwines with raw, untamed lust. Our performers are goddesses of the night, masters of the seductive arts who weave a spell of temptation that transcends the ordinary. Underneath the dim glow of candlelight, every whispered breath and every lingering touch draws you deeper into the realm of forbidden ecstasy.</p>
                    </div>
                </div>
                 <div className="row icon-row">
                    <div className="col-xs center-xs">
                        <img src="img/004-shopping-bag.svg" className="icon" /><br/>
                        Escape Rooms
                    </div>
                    <div className="col-xs center-xs">
                        <img src="img/005-fountain-pen.svg" className="icon" /><br/>
                        Shop
                        <p>Here you can buy various types of items.</p>
                    </div>
                    <div className="col-xs center-xs">
                        <img src="img/005-fountain-pen.svg" className="icon" /><br/>
                        Hackers Club
                        <p>This place is not for ordinary people. The entry is limited only for chosen ones.</p>
                    </div>
                </div>
                {
                localStorage.getItem('admin') === 'true' && (
                    <div className="adminPanel">
                        <button className="addEvent">Add Service</button>
                    </div>
                )
            }

            </div>
        </section>
  )
}