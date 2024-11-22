var splide = new Splide( '.splide' );
var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
var end  = splide.Components.Controller.getEnd() + 1;
var rate = Math.min( ( splide.index + 1 ) / end, 1 );
bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();


document.querySelector('.sec7js').innerHTML =`
<div class="row  wow fadeInDown">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="sec7-1">
                        <p>Sarah info </p> 
                    <h4>contact <span>sarah </span>  </h4> 
                    <p>I would like to welcome you to our office and invite you to become better <br>
                        acquainted with the world of pet sitting and my distinct philosophy. Can be an <br> 
                        intimidating endeavor.</p>
                        <div class="d-flex py-4">
                            <div class="sec7-1-1">
                            <div class="d-flex">
                                <div class="sec7icon1  px-1">
                                    <i class="fa-solid fa-arrow-trend-up"></i>
                                </div>
                                <div class="sec7h4">
                                    <h6>email</h6>
                                    <hr>
                                    <p> Our Contact Email

                                        joanne@yourdomin.com
                                        
                                        joanne@yourdomin.com
                                        
                                        </p>
                                </div>
                            </div>
                            </div>
                            <div class="d-flex">
                                <div class="sec7icon1 px-1">
                                    <i class="fa-solid fa-arrow-trend-up"></i>
                                </div>
                                <div class="sec7h4">
                                    <h6>adress</h6>
                                    <hr>
                                    <p>Our Office Location

                                        #405, Lan
                                        
                                        </p>
                                </div>
                            </div>
                            <div class="d-flex px-5">
                                <div class="sec7icon1  px-1">
                                    <i class="fa-solid fa-arrow-trend-up"></i>
                                </div>
                                <div class="sec7h4">
                                    <h6>phone</h6>
                                    <hr>
                                    <p> 
                                        Our Contact Phone

                                        +123 456 789

                                        </p>
                                </div>
                            </div>
                            </div>
                            </div>
                            
                        
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="sec7-2">
                                <h3 class="text-center py-5">make an <span>appointment </span> </h3>
                                <div class="formsec7">
                                    <div class="form px-4">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <div class="formsec7-1">
                                                    <select class="input1">
                                                    <option value="">Session Type</option>
                                                    <option value="session1">Session 1</option>
                                                    <option value="session2">Session 2</option>
                                                    <option value="session2">Session 3</option>
                                                    <option value="session2">Session 4</option>
                                                </select>
                                                <input type="text" class="input1 my-1" placeholder="Your name">
                                                <input type="email" class="input1 my-1" placeholder="Your email">
                                                <input type="text" class="input1" placeholder="Your subject">

                                                <p>All fields are obligatory</p>
                                                </div>
                                                
                                                
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <textarea class="form-control input2" rows="7"  placeholder="Your message"></textarea> 
                                                <button class="formsec7btn" type="submit"> Make an Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
`
const WEEK =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
function updateTime(){
    var now = new Date();
    document.getElementById("time").innerText =
    zeroPadding(now.getHours(),2)+ ":" +
    zeroPadding(now.getMinutes(),2)+ ":" +
    zeroPadding(now.getSeconds(),2);
    
    document.getElementById("date").innerText =
    now.getFullYear() + "-" +
    zeroPadding(now.getMonth()+1,2) + "-"+
    zeroPadding(now.getDate(),2)+ " "+
    WEEK[now.getDay()];
}
setInterval(updateTime,1000);
updateTime();


function zeroPadding(num,digit){
    return String(num).padStart(digit,'0');
} 
    
 
document.querySelector('.sec5blog').innerHTML =`
  <h1>ahmed </h1>
`
