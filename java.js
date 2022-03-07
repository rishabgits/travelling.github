class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
    
        <a href='index.html'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='about.html'>About us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='contact.html'>contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='doctor.html'>Fees</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='service.html'>Language</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
           
            
        `

    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div style="width:100; height:100%; background-color:#a9c2d1;">
    <div>
        <div class="row">
                 <div style="height:100%; background-color:#a9c2d1; width:30%;"> <br>

                        <blockquote>
                          Sahyadri school are the largest chain of  in Maharashtra. It is the brainchild of. Charudutt
                          Apte, one of India’s most renowned Neurosurgeons and more importantly an ardent practitioner of ethical
                          medical practices.
                          <hr><b>Company name:</b> Sahyadri school, Private Limited (formerly known as the Sahyadri Hospitals
                          Limited) <b><br>Address of registered office:</b> S N. 89 & 90 , Plot No. 54, Lokmanya Colony,Kothrud, Pune
                          411038,
                          Maharashtra,India<br>Corporate Identity Number (CIN):U85110PN1996PTC099499 <b><br>Telephone number:</b> <mark>020
                            6721 5000</mark>
                          <b><br>Email id:</b> feedback@sahyadrihospitals.com<br><b>Fax No:</b> +91 20 6721 5098 <b><br>Contact person in case
                            of any queries or grievances:</b> Mr. Rohan Mirage<br>
                        </blockquote>
                 </div>&nbsp;&nbsp;

                <div style="height:100%;width:20%; background-color:#a9c2d1;"> <br>
                        <blockquote>
                          <h2>
                          CONTACT</h2>
                          XCL World Academy<br>
                          2 Yishun Street 42<br>
                          Singapore <br>
                      
                        </blockquote>
                 </div>&nbsp;&nbsp;

                 <div style="height:100%; width:25%; background-color: #a9c2d1;"> <br>
                        <blockquote>
                          _
                          <hr>
                          ADMISSIONS ENQUIRIES: +65 6<br>
                          GENERAL ENQUIRIES: +65 6808 7321<br>
                          EMAIL: ADMISSIONS@XWA.EDU.SG<br>
                          <hr> 
                        </blockquote>
                 </div>&nbsp;&nbsp;

                 <div style="height:100%;width:20%; background-color: #a9c2d1;"> <br>
                        <blockquote>
                          _
                          <hr>Sahyadri school Kasba Peth,Pune
                          <hr>Sahyadri school Kothrud, Pune
                          <hr>
                        </blockquote>
                 </div>
    
          </div>
     </div>
  </div>

        
        `

    }
}
customElements.define('my-footer', MyFooter)