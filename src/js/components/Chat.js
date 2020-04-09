import React from 'react';
import 'css/Student.css'

// "Hooks"

const Chat = () => {
	return (
	<>

		<div class="chat-header clearfix">
			<img src={mom} alt="Background" />
            <div class="chat-about">
              <i class="fas fa-comment-alt"></i> <div class="chat-with">Chat with Mom</div>
            </div>
            <i class="fa fa-star"></i>
        </div> 
          
        <div class="msger-chat chat-history">
          <div class="msg left-msg">
            <div
             class="msg-img"
             style="background-image: url(image/mom.JPG)"
            ></div>
      
            <div class="msg-bubble">
              <div class="msg-info">
                <div class="message-data-name"> <i class="fa fa-circle online"> </i>Mom</div>
                <div class="message-data-time">12:45</div>
              </div>
      
              <div class="msg-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, porro. Aspernatur facilis cum inventore fugit repellendus. Amet beatae, itaque, voluptates nostrum laborum iure soluta excepturi, quod sequi maiores qui odio!
              </div>
            </div>
          </div>

          <div class="msg right-msg">
            <div
            class="msg-img"
            style="background-image: url(image/hailey.JPG)"
            ></div>
            <div class="msg-bubble">
              <div class="msg-info">
                <div class="message-data-name">Hailey</div> <i class="fa fa-circle me"></i>
                <div class="message-data-time">12:46</div>
              </div>
      
              <div class="msg-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sunt totam rem vel tenetur deserunt doloribus enim illo explicabo dolores quis! Eligendi, dolor accusamus! Sequi tempore eum officiis totam voluptatibus.
              </div>
            </div>
          </div>
          </div> 

          <form class="msger-inputarea chat-message clearfix">
            <input type="text" class="msger-input" placeholder="Type Message"> </input>
            <button type="submit" class="msger-send-btn">Send</button>
         </form>
		</>)
}

export default Chat;
