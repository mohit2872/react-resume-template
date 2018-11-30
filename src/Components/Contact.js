import React, { Component } from 'react';

class Contact extends Component {

   constructor(props){
      super(props);
      this.state = {
         name: "",
         messagePrinted: false,
         cname: "",
         number: "",
         start: true,    
      };
      this.handleName = this.handleName.bind(this);
      this.handleNumber = this.handleNumber.bind(this);
      this.handleCName = this.handleCName.bind(this);
      this.nameError = this.nameError.bind(this);
    }

    handleName(e){
       this.setState({
          name: e.target.value
       })
    }

    handleCName(e){
      this.setState({
         cname: e.target.value
      })
   }

   handleNumber(e){
      this.setState({
         number: e.target.value
      })
   }

   nameError(){
      const {name} = this.state
      if(name==""){
         return <div>Please fill the company name</div>;
      }
   }

   cnameError(){
      const {cname} = this.state
      if(cname==""){
         return <div>Please fill the name</div>;
      }
   }

   numberError(){
      const {number} = this.state
      if(number==""){
         return <div>Please fill the number</div>;
      } else if (number.length != 10){
         return <div>Number should be of 10 digits</div>;
      } else if (parseInt(number) == NaN){
         return <div>Numbers should consist of digits</div>;  
      }
   }

   handleSubmit(){
      this.setState({
         messagePrinted: true
      })
   }

   showMessage(){
      const {name, cname, number, messagePrinted} = this.state;
      if(messagePrinted){
         if (name=="" || cname=="" || number==""){
            return <div>Some details are empty</div>
         }
         return(
            <div>
               <p>Name: {name}</p>
               <p>Company Name: {cname}</p>
               <p>Number: {number}</p>
               <p>Details have been submitted!</p>
            </div>
         )
      }
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Contact</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               
					

                  <div>
                     {this.nameError()}
						   <label htmlFor="contactEmail">Company Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleName}/>
                  </div>

                  <div>
                     {this.numberError()}
                     <label htmlFor="contactName">Number <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleNumber}/>
						   
                  </div>

                  <div>
                     {this.cnameError()}
						   <label htmlFor="contactSubject">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleCName}/> 
                  </div>

                  <div>
                     <button className="submit" onClick={()=>this.handleSubmit()}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					

            {this.showMessage()}
           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            {/* <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div>
            </aside> */}
      </div>
   </section>
    );
  }
}

export default Contact;
