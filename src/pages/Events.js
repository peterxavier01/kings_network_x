import { useState } from 'react';

import image1 from "../images/sunday1.jpg";
import image2 from "../images/monday2.jpg";
import image3 from "../images/monday1.jpg";
import image4 from "../images/wednesday3.jpg";
import image5 from "../images/wednesday1.jpeg";
import image6 from "../images/friday1.jpg";

const Events = () => {

    const [articles] = useState([
        { src: image1, genre: 'Sunday', title: 'Sunday Service', id: 1},
        { src: image2, genre: 'Monday', title: 'Foundation School', id: 2},
        { src: image3, genre: 'Tuesday', title: 'Leader\'s Meeting', id: 3},
        { src: image4, genre: 'Wednesday', title: 'Mid-week Service', id: 4},
        { src: image5, genre: 'Thursday', title: 'Evangelism/Soul-winning', id: 5},
        { src: image6, genre: 'Friday', title: 'Prayer Meeting', id: 6}
    ]);

    return (
        <>
        <div className="events-container">
            <h4 className="display-5 mb-2 text-green-500">Weekly Events</h4>
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
        </div>
        </>
     );
}
 
export default Events;