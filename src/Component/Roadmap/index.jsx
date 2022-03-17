import React from 'react'
import road_map from '../../assets/roadmap.png'

function index() {
    return (
        <section id="roadmap" style={{ height: 900 }}>
            <h2 className='text-center'>RoadMap</h2>
            <div className='position-relative'>
                <ul style={{ listStyle: "none", top: 400, left: 600 }} className="position-absolute">
                    <li><b>Pharse 1</b></li>
                    <li>Website launch</li>
                    <li>2000 telegram members</li>
                    <li>Meme development</li>
                    <li>Floki Doge is born</li>
                </ul>
                <ul style={{ listStyle: "none", top: 200, left: 900 }} className="position-absolute">
                    <li><b>Pharse 2</b></li>
                    <li>Website launch</li>
                    <li>2000 telegram members</li>
                    <li>Meme development</li>
                    <li>Floki Doge is born</li>
                </ul>
                <ul style={{ listStyle: "none", top: 130, left: 400 }} className="position-absolute">
                    <li><b>Pharse 3</b></li>
                    <li>Website launch</li>
                    <li>2000 telegram members</li>
                    <li>Meme development</li>
                    <li>Floki Doge is born</li>
                </ul>

                <ul style={{ listStyle: "none", top: 50, left: 750 }} className="position-absolute">
                    <li><b>Pharse 3</b></li>
                    <li>Website launch</li>
                    <li>2000 telegram members</li>
                    <li>Meme development</li>
                    <li>Floki Doge is born</li>
                </ul>
            </div>
            <div style={{ width: 1400, height: 600 }} className="d-flex justify-content-center">
                <img src={road_map} alt="notfound" style={{ maxHeight: "100%", maxWidth: "100%" }} />
            </div>

        </section>
    )
}

export default index