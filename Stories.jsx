import React from 'react';
import "./styles.css";

import pic1 from "../images/case1.jpg";
import pic2 from "../images/case2.jpg";
import pic3 from "../images/case3.jpg";
import pic4 from "../images/case4.jpg";
import pic5 from "../images/case5.jpg";
import pic6 from "../images/case6.jpg";
import pic7 from "../images/case7.jpg";

const Stories = () => {



  return (
<div>
<div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="work-wrap">
                    <a href="Easy_access_to_health_services.html">
                        <img class="img-wrap" src={pic1}/>
                        <div class="work-contn">
                            <strong>Easy access to health services </strong>
                            <p>
                                "&nbsp;Jagarnathpur Health Post is provising &nbsp;health services with 19 employees"
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-4">
                <div class="work-wrap">
                    <a href="Addressing_child_protection_issues.html">
                        <img class="img-wrap" src={pic2}/>
                        <div class="work-contn">
                            <strong>Addressing child protection issues</strong>
                            <p>
                                "&nbsp;According to the Act relating &nbsp;to children, 2075 (2018) clause 60-every ward"
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-md-4">
                <div class="work-wrap">
                    <a href="Community_awareness_of_the_impact_of_public_awareness_programs.html">
                        <img class="img-wrap" src={pic3}/>
                        <div class="work-contn">
                            <strong>Community awareness of the impact of public awareness programs</strong>
                            <p>
                                "&nbsp;In Pratappur Rural Municipality ward number 7 &nbsp;Jagatpur and Parsa tole"
                            </p>
                        </div>
                    </a>
                </div>
            </div>

         {/*    <div class="col-md-4">
                <div class="work-wrap">
                    <a href="Tricycle_A_convenient_instrument_making_life_of_Rajkishor_easier.html">
                        <img class={pic4} src={pic4}/>
                        <div class="work-contn">
                            <strong>Tricycle: A convenient instrument making life of Rajkishor easier</strong>
                            <p>
                                "&nbsp;Bardaghat Susta (West), Nawalparasi, Palhinandan village  &nbsp;municipality, ward no. 1, Rampurwa, Rokapur"
                            </p>
                        </div>
                    </a>
                </div>
            </div>  */}  
            

            <div class="col-md-4">
                <div class="work-wrap">
                    <a href="Opportunity_is_the_essence_of_luck.html">
                        <img class="img-wrap" src={pic5}/>
                        <div class="work-contn">
                            <strong>Opportunity is the essence of luck</strong>
                            <p>
                                "&nbsp;A person with a disability must overcome more &nbsp;challenges in their lifetime than do"
                            </p>
                        </div>
                    </a>
                </div>
            </div>  

            <div class="col-md-4">
                <div class="work-wrap">
                    <a href="Blessing_to_Laxmi.html">
                        <img class="img-wrap" src={pic6}/>
                        <div class="work-contn">
                            <strong>Blessing to Laxmi</strong>
                            <p>
                                "&nbsp;Laxmi Chaudhary, residence of Pratappur -07, &nbsp;Tangikot is a hardworking women."
                            </p>
                        </div>
                    </a>
                </div>
            </div> 

            <div class="col-md-4">
                <div class="work-wrap">
                    <a href="Ensuring_child_rights_at_the_local_level.html">
                        <img class="img-wrap" src={pic7}/>
                        <div class="work-contn">
                            <strong>Ensuring child rights at the local level</strong>
                            <p>
                                "&nbsp;Child marriage, child labour, dowry system, &nbsp;substance abuse, suicide, drug addiction"
                            </p>
                        </div>
                    </a>
                </div>
            </div> 
        </div>
    </div>
</div>
  )
}

export default Stories