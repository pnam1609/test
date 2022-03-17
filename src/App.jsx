import RoadMap from './Component/Roadmap'
import Clipboard from './Component/Clipboard'

function App() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav" >
                <div className="container px-4">
                    <img src="./assets/icon.jpg" style={{ borderRadius: "50%" }} alt="" /> &nbsp;
                    <a className="navbar-brand" href="#page-top">Floki Doge</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#roadmap">Roadmap</a></li>
                            <li className="nav-item"><a className="nav-link" href="#tokenomics">Tokenomics</a></li>
                            <li className="nav-item"><a className="nav-link" href="#family">Doge Family</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" target="_blank" href="#contact">Whitepaper</a></li>

                            <li className="nav-item" >
                                <a href="https://twitter.com/FlokiDogeBSC" className="nav-link" target="_blank" rel="noopener noreferrer">
                                    {/* <img src="./assets/twitter-icon.png" alt=""  /> */}
                                    <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" style={{ width: 20, height: 20 }} alt="" />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="https://t.me/flokidoge_bsc_en" target="_blank" rel="noopener noreferrer">
                                    {/* <img src="./assets/telegram-icon.png" alt=""  /> */}
                                    <img src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png" style={{ width: 20, height: 20 }} alt="" />

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="home" style={{ padding: "0px 150px" ,height: 650}}>
                <div className="container d-flex" style={{ marginTop: 100 }} >
                    <header className="bg-light.bg-gradient bg-gradient" style={{  flex: 1 }}>
                        <div className=" px-4 ">
                            <h1 className="fw-bolder">Welcome to Floki Doge</h1>
                            <p className="lead">Floki Doge is a hyper-deflationary token that has a smart exchange system built into the
                                ecosystem. Floki Doge automatically sends $BTCB rewards directly to your wallet.</p>
                            <div className='d-flex' style={{ marginTop: 30 }}>
                                <a href="http://" target="_blank" rel="noopener noreferrer" style={{ marginRight: 50 }}>
                                    <button type="button" className="btn btn-outline-primary">Presale</button>
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="btn btn-outline-primary">Buy FLDoge</button>
                                </a>
                            </div>
                            <Clipboard  />
                            {/* <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-line me-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>
                                
                            </div> */}
                        </div>
                    </header>
                    <div style={{ flex: 1 }}>
                        <img style={{ maxWidth: "100%", maxHeight: "100%", }}
                            src="https://tophinhanhdep.com/wp-content/uploads/2021/10/HD-Landscape-Wallpapers.jpg" alt="" />
                    </div>
                </div>
            </section>


            {/* <div className="card bg-dark text-white" style={{ marginTop: 50 }}>
                <img src="https://images8.alphacoders.com/367/367162.jpg" className="card-img" alt="..." style={{width:1920,height:500}}/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div> */}

            <section id="about" className="bg-light" style={{ height: 400, padding: "0px 150px" }}>
                <div className="container px-4">
                    <div className="row gx-4 ">
                        <div className="col-lg-8">
                            <h2 className="text-center">About Floki Doge</h2>
                            <p className="lead">This is a great place to talk about your webpage. This template is purposefully
                                unstyled so you can use it as a boilerplate or starting point for you own landing page designs!
                                This template features:</p>
                            <ul>
                                <li>Clickable nav links that smooth scroll to page sections</li>
                                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the
                                    navbar</li>
                                <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <RoadMap />

            {/* <section id="roadmap">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-center">RoadMap</h2>


                            <div className="d-flex flex-wrap justify-content-around">
                                <div className="shadow p-3 mb-5 bg-body rounded" style={{ width: 300, height: 350 }}>
                                    <h2>Pharse 1</h2>
                                    <p>Project start</p>
                                    <p>Website and White paper</p>
                                    <p>Marketing and socialmedia</p>
                                    <p>Smart contract deployed</p>
                                    <p>Presale</p>
                                </div>

                                <div className="shadow p-3 mb-5 bg-body rounded" style={{ width: 300, height: 350 }}>
                                    <h2>Pharse 2</h2>
                                    <p>Project start</p>
                                    <p>Website and White paper</p>
                                    <p>Marketing and socialmedia</p>
                                    <p>Smart contract deployed</p>
                                    <p>Presale</p>
                                </div>

                                <div className="shadow p-3 mb-5 bg-body rounded" style={{ width: 300, height: 350 }}>
                                    <h2>Pharse 3</h2>
                                    <p>Project start</p>
                                    <p>Website and White paper</p>
                                    <p>Marketing and socialmedia</p>
                                    <p>Smart contract deployed</p>
                                    <p>Presale</p>
                                </div>

                                <div className="shadow p-3 mb-5 bg-body rounded" style={{ width: 300, height: 350 }}>
                                    <h2>Pharse 4</h2>
                                    <p>Project start</p>
                                    <p>Website and White paper</p>
                                    <p>Marketing and socialmedia</p>
                                    <p>Smart contract deployed</p>
                                    <p>Presale</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="tokenomics" className="bg-light" style={{ marginTop: 300, padding: "0px 150px" }}>
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-center">Tokenomics</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat
                                voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et
                                repudiandae ipsa exercitationem, in, quo totam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="family">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ width: 1920, height: 900 }}>
                            <img src="https://images8.alphacoders.com/367/367162.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" style={{ width: 1920, height: 900 }}>
                            <img src="https://images7.alphacoders.com/304/304425.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" style={{ width: 1920, height: 900 }}>
                            <img src="https://images5.alphacoders.com/117/1174150.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                {/* 
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
            </section>

            <section id="contact" className="bg-light" style={{ padding: "0px 150px" }}>
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2>Contact us</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat
                                voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et
                                repudiandae ipsa exercitationem, in, quo totam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-4 bg-dark">
                <div className="container px-4 d-flex justify-content-around">
                    <div className="d-flex">
                        <img src="./assets/floki_doge.jpg" alt="" style={{ borderRadius: "50%" }} />
                        <h3 className="m-0 text-center text-white">Floki Doge</h3>
                    </div>
                    <div>
                        <h2 className=" text-center text-white" style={{ marginBottom: 20 }}>Join the Community</h2>
                        <p className="m-0 text-center text-white">Have any questions about the project?</p>
                        <p className=" text-center text-white" style={{ marginBottom: 30 }}>Join the Telegram for more information</p>
                        <p className=" text-center text-white">Copyright &copy; Floki Doge 2022</p>
                    </div>
                    <div className="d-flex">
                        <div style={{ marginRight: 10 }}>
                            <a href="https://twitter.com/FlokiDogeBSC" target="_blank" rel="noopener noreferrer">
                                <img src="https://static.wixstatic.com/media/644f32_850c7e9fc0e44e06aeb55a55b6c31b10~mv2.png/v1/fill/w_49,h_49,al_c,usm_0.66_1.00_0.01,enc_auto/644f32_850c7e9fc0e44e06aeb55a55b6c31b10~mv2.png" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://t.me/flokidoge_bsc_en" target="_blank" rel="noopener noreferrer">
                                <img src="https://static.wixstatic.com/media/644f32_1491404a90594b46ad5c428723a97c9b~mv2.png/v1/fill/w_49,h_49,al_c,usm_0.66_1.00_0.01,enc_auto/644f32_1491404a90594b46ad5c428723a97c9b~mv2.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
