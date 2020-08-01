const Movie = (props) => {

    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="cover-pic">
                    <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-4 love-box">
                        <h6 className="text-gray-900 mb-0 font-weight-bold">
                            <i className="fas fa-heart text-danger"></i> 50%
                        </h6>
                        <small className="text-muted">8,784</small>
                    </div>
                    <img src="/img/cover3.jpg" className="img-fluid" alt="..."/>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3">
                <div className="bg-white p-3 widget shadow rounded mb-4">
                    <img src="/img/m1.jpg" className="img-fluid rounded"
                         alt="..."/>
                        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">Director</h1>
                        <p>Jon Watts</p>
                        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">Writers</h1>
                        <p>Erik Sommers,Stan Lee,Chris McKenna</p>
                        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">Cast</h1>
                        <p>Tom Holland,Jake Gyllenhaal,Zendaya</p>
                        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">Plot</h1>
                        <p className="mb-0">Peter Parker and his friends go on a summer trip to Europe. However, they
                            will hardly be able to rest - Peter.</p>
                </div>
            </div>
            <div className="col-xl-9 col-lg-9">
                <div className="bg-white info-header shadow rounded mb-4">
                    <div className="row d-flex align-items-center justify-content-between p-3 border-bottom">
                        <div className="col-lg-7 m-b-4">
                            <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">The Fate of the
                                Furious <small>2019</small></h3>
                            <p className="mb-0 text-gray-800"><small className="text-muted">
                                <i className="fas fa-film fa-fw fa-sm mr-1"></i> Action / Adventure / Science Fiction / 3D</small>
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-between py-3 px-4">
                        <div className="col-lg-6 m-b-4">
                            <p className="mb-0 text-gray-900">
                                <i className="fas fa-money-bill fa-sm fa-fw mr-1"></i> BUDGET - <span
                                className="text-white rounded px-2 py-1 bg-info">$160,000,000</span></p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 widget shadow rounded mb-4">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                               aria-controls="home" aria-selected="true">Summary</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                               aria-controls="profile" aria-selected="false">Cast
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="videos-tab" data-toggle="tab" href="#videos" role="tab"
                               aria-controls="videos" aria-selected="false">Videos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                               aria-controls="contact" aria-selected="false">Reviews</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h5 className="mt-0 mb-3">New Year's Eve on the Waterfront</h5>
                            <p>Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf
                                District Council and the City of Boston is proud to announce the New Year's Eve Midnight
                                Harbor Fireworks! This beloved nearly 40-year old tradition is made possible by the
                                generous support of local waterfront organizations and businesses and the support of the
                                City of Boston and the Office of Mayor Marty Walsh.</p>
                            <p>Join us as we ring in the New Year with a dazzling display over Boston Harbor. Public
                                viewing is free and available from the Harborwalk of these suggested viewing
                                locations:</p>
                            <ul>
                                <li>Christopher Columbus Park, North End</li>
                                <li>Fan Pier, Seaport District</li>
                                <li>East Boston Harborwalk</li>
                            </ul>
                            <p>The show will begin promptly at midnight.</p>
                            <p>Register here for a reminder and updates about the harbor fireworks and other waterfront
                                public programs as they become available. Be the first to be notified for popular
                                waterfront New Year's Eve public activities.</p>
                            <p className="mb-2">Register here for a reminder and updates about the harbor fireworks and
                                other waterfront public programs as they become available. Be the first to be notified
                                for popular waterfront New Year's Eve public activities.</p>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4">
                                    <h5 className="h6 mt-0 mb-3 font-weight-bold text-gray-900">CAST</h5>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s1.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Carla Gugino</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s2.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Sylvester Stallone</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s3.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Rose Byrne</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s4.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Jason Statham</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <h5 className="h6 mt-0 mb-3 font-weight-bold text-gray-900">CREW</h5>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s3.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Rose Byrne</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s4.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Jason Statham</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s1.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Carla Gugino</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s2.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Sylvester Stallone</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <h5 className="h6 mt-0 mb-3 font-weight-bold text-gray-900">Support</h5>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s1.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Carla Gugino</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s2.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Sylvester Stallone</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s3.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Rose Byrne</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="artist-list mb-3">
                                        <a className="d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle"
                                                     src="/img/s4.png" alt=""/>
                                                    <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Jason Statham</div>
                                                <div className="small text-gray-500">Acting</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="videos" role="tabpanel" aria-labelledby="videos-tab">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="mb-4">
                                        <iframe width="100%" height="215"
                                                src="https://www.youtube.com/embed/uNppTCoYdWI" frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                ></iframe>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="mb-4">
                                        <iframe width="100%" height="215"
                                                src="https://www.youtube.com/embed/XkT6uwHFUKY" frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                ></iframe>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="mb-4">
                                        <iframe width="100%" height="215"
                                                src="https://www.youtube.com/embed/uNppTCoYdWI" frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                ></iframe>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="mb-4">
                                        <iframe width="100%" height="215"
                                                src="https://www.youtube.com/embed/XkT6uwHFUKY" frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="card-body p-0 reviews-card">
                                <div className="media mb-4">
                                    <img className="d-flex mr-3 rounded-circle"
                                         src="/img/s1.png" alt=""/>
                                        <div className="media-body">
                                            <div className="mt-0 mb-1">
                                                <span
                                                    className="h6 mr-2 font-weight-bold text-gray-900">Stave Martin</span>
                                                <span><i className="fa fa-calendar"></i> Feb 12, 2018</span>
                                                <div className="stars-rating float-right"><i
                                                    className="fa fa-star active"></i>
                                                    <i className="fa fa-star active"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i> <span
                                                        className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                                </div>
                                            </div>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                Donec lacinia congue felis in faucibus.</p>
                                        </div>
                                </div>
                                <div className="media">
                                    <img className="d-flex mr-3 rounded-circle"
                                         src="/img/s2.png" alt="" />
                                        <div className="media-body">
                                            <div className="mt-0 mb-1">
                                                <span
                                                    className="h6 mr-2 font-weight-bold text-gray-900">Mark Smith</span>
                                                <span><i className="fa fa-calendar"></i> Feb 12, 2018</span>
                                                <div className="stars-rating float-right"><i
                                                    className="fa fa-star active"></i>
                                                    <i className="fa fa-star active"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i> <span
                                                        className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                                </div>
                                            </div>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                Donec lacinia congue felis in faucibus.</p>
                                            <div className="media mt-4">
                                                <img className="d-flex mr-3 rounded-circle"
                                                     src="/img/s3.png" alt="" />
                                                    <div className="media-body">
                                                        <div className="mt-0 mb-1">
                                                            <span className="h6 mr-2 font-weight-bold text-gray-900">Ryan Printz</span>
                                                            <span><i className="fa fa-calendar"></i> Feb 12, 2018</span>
                                                            <div className="stars-rating float-right"><i
                                                                className="fa fa-star active"></i>
                                                                <i className="fa fa-star active"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i> <span
                                                                    className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                                            </div>
                                                        </div>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                            scelerisque ante sollicitudin. Cras purus odio, vestibulum
                                                            in vulputate at, tempus viverra turpis. Fusce condimentum
                                                            nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                                            in faucibus.</p>
                                                    </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="media mt-4">
                                    <img className="d-flex mr-3 rounded-circle"
                                         src="/img/s4.png" alt="" />
                                        <div className="media-body">
                                            <div className="mt-0 mb-1">
                                                <span
                                                    className="h6 mr-2 font-weight-bold text-gray-900">Stave Mark</span>
                                                <span><i className="fa fa-calendar"></i> Feb 12, 2018</span>
                                                <div className="stars-rating float-right"><i
                                                    className="fa fa-star active"></i>
                                                    <i className="fa fa-star active"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i> <span
                                                        className="rounded bg-warning text-dark pl-1 pr-1">5/3</span>
                                                </div>
                                            </div>
                                            <p className="mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel
                                                metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}


export default Movie