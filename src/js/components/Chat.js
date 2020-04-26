import React from 'react';
import Layout from 'components/Layout'
import styles from 'css/index.module.css'; 

const Course = () => {

	return (
		<Layout heading="Chat">
      <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search" />
        </div>
        <ul className="list">
          <h2>Family</h2>
          <li className="clearfix list">
            <img src="https://images.unsplash.com/photo-1521289934514-8634119fa6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" /> 
            <div className="about">
              <div className="name">Kwon Soon Ae</div>
              <div className="status">
                <i className="fa fa-circle online" /> online
              </div>
            </div>
          </li>
          <li className="clearfix list">
            <img src="image/eun.JPG" alt="Ha Eun" /> 
            <div className="about">
              <div className="name">Koo Haeun</div>
              <div className="status">
                <i className="fa fa-circle offline" /> left 7 mins ago
              </div>
            </div>
          </li>
          <li className="clearfix list">
            <img src="image/min.JPG" alt="Mini" /> 
            <div className="about">
              <div className="name">Koo Hamin</div>
              <div className="status">
                <i className="fa fa-circle online" /> online
              </div>
            </div>
          </li>
          <li className="clearfix list">
            <img src="image/dad.jpg" alt="Dad" /> 
            <div className="about">
              <div className="name">Koo Hone Seo</div>
              <div className="status">
                <i className="fa fa-circle offline" /> left 30 mins ago
              </div>
            </div>
          </li>
        </ul>
        <div className="chat-header clearfix">
          <img src="image/mom.jpg" alt="Background" />
          <div className="chat-about">
            <i className="fas fa-comment-alt" /> <div className="chat-with">Chat with Mom</div>
          </div>
          <i className="fa fa-star" />
        </div> 
        <div className="msger-chat chat-history">
          <div className="msg left-msg">
            <div className="msg-img" style={{backgroundImage: 'url(image/mom.JPG)'}} />
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="message-data-name"> <i className="fa fa-circle online"> </i>Mom</div>
                <div className="message-data-time">12:45</div>
              </div>
              <div className="msg-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, porro. Aspernatur facilis cum inventore fugit repellendus. Amet beatae, itaque, voluptates nostrum laborum iure soluta excepturi, quod sequi maiores qui odio!
              </div>
            </div>
          </div>
          <div className="msg right-msg">
            <div className="msg-img" style={{backgroundImage: 'url(image/hailey.JPG)'}} />
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="message-data-name">Hailey</div> <i className="fa fa-circle me" />
                <div className="message-data-time">12:46</div>
              </div>
              <div className="msg-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sunt totam rem vel tenetur deserunt doloribus enim illo explicabo dolores quis! Eligendi, dolor accusamus! Sequi tempore eum officiis totam voluptatibus.
              </div>
            </div>
          </div>
        </div> 
        <form className="msger-inputarea chat-message clearfix">
          <input type="text" className="msger-input" placeholder="Type Message" /> 
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
         
    </Layout>
	)
}

export default Course;
