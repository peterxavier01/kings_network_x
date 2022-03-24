// import { Row, Col, Container, Carousel } from "react-bootstrap";
import { useState } from 'react';

const Notifications = () => {

    const [articles] = useState([
        { src: '/images/sunday1.jpg', genre: 'Sunday', title: 'Sunday Service', id: 1},
        { src: 'images/monday2.jpg', genre: 'Monday', title: 'Foundation School', id: 2},
        { src: 'images/monday1.jpg', genre: 'Tuesday', title: 'Leader\'s Meeting', id: 3},
        { src: 'images/wednesday3.jpg', genre: 'Wednesday', title: 'Mid-week Service', id: 4},
        { src: 'images/wednesday1.jpeg', genre: 'Thursday', title: 'Evangelism/Soul-winning', id: 5},
        { src: 'images/friday1.jpg', genre: 'Friday', title: 'Prayer Meeting', id: 6}
    ]);

    return (
        <>
            <h4 className="display-5 mb-2">Weekly Events</h4>
            <div className="article">
                {articles.map((article) => (
                        <article className="event-container" key={article.id}>
                            <div className="event-img">
                                <img key={article.src} src={article.src} alt="weekly event" />
                            </div>
                            <div className="event-content">
                                <p className="genre">{article.genre}</p>
                                <h5 className="title">{article.title}</h5>
                            </div>
                    </article>
                ))}
            </div>
            {/* <div style={{ display: "block", width: 700 }}>
            <h4 className="display-5 my-2">Upcoming Events</h4>
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 car-img"
                            src="/images/global.jpeg"
                            alt="global day of prayer"
                        />
                        <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 car-img"
                            src="/images/global2.jpeg"
                            alt="global day of prayer"
                        />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div> */}
        </>
     );
}
 
export default Notifications;