import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'

import webOne from '../public/images/thumb/web/website1.jpg'
import webTwo from '../public/images/thumb/web/website2.jpg'
import webThree from '../public/images/thumb/web/website3.jpg'
import webFour from '../public/images/thumb/web/website4.jpg'
import webFive from '../public/images/thumb/web/website9.jpg'
import webSix from '../public/images/thumb/web/website20.jpg'
import webSeven from '../public/images/thumb/web/greaterpeoriaworksthumb.png'
import webEight from '../public/images/thumb/web/pixelpredictive-thumb.png'
import webNine from '../public/images/thumb/web/riverplex-thumb.png'
import webTen from '../public/images/thumb/web/riverplex-app-thumb.png'
import webEleven from '../public/images/thumb/web/cat-conn-logo.svg'
import webTwelve from '../public/images/thumb/web/oaklawn-thumb.png'
import webThirteen from '../public/images/thumb/web/astuff_website.jpg'
import webFourteen from '../public/images/thumb/web/astuff_data_thumb.jpg'
import webFifteen from '../public/images/thumb/web/home-manitowoc-crawler-crane.jpg'
import webSixteen from '../public/images/thumb/web/onepurcbd-home.jpg.jpg'
import webSeventeen from '../public/images/thumb/web/potain-home.jpg'
import webEighteen from '../public/images/thumb/web/bep.jpg'
export default function Web(){
  let width = 600;
  let height = 600;
  return(
    <Layout>
      <Head>
        <title>Web Development and Design | Jonathan A Klein</title>
      </Head>
      <h1>Web Development and Design</h1>
      <div className="flex justify-center item-stretch flex-wrap">
        <Card link="/web/webOne" title="Reggie Red Bird Coloring" text="View Description" img={webOne} width={width} height={height}/>
        <Card link="/web/webTwo" title="ISU Redbird Ball Catch Game" text="View Description" img={webTwo} width={width} height={height}/>
        <Card link="/web/webThree" title="ISU Redbird Matching Game" text="View Description" img={webThree} width={width} height={height}/>
        <Card link="/web/webFour" title="ISU Redbird Typing Game" text="View Description" img={webFour} width={width} height={height}/>
        <Card link="/web/webFive" title="ISU Association of Black Academic Employees" text="View Description" img={webFive} width={width} height={height}/>
        <Card link="/web/webSix" title="ISU Student Health Services" text="View Description" img={webSix} width={width} height={height}/>
        <Card link="/web/webSeven" title="Greater Peoria Works" text="View Description" img={webSeven} width={width} height={height}/>
        <Card link="/web/webEight" title="PixelPrediction" text="View Description" img={webEight} width={width} height={height}/>
        <Card link="/web/webNine" title="Peoria Riverplex" text="View Description" img={webNine} width={width} height={height}/>
        <Card link="/web/webTen" title="Peoria Riverplex Mobile App" text="View Description" img={webTen} width={width} height={height}/>
        <Card link="/web/webEleven" title="CAT Connect" text="View Description" img={webEleven} width={width} height={height}/>
        <Card link="/web/webTwelve" title="Oak Lawn Estates" text="View Description" img={webTwelve} width={width} height={height}/>
        <Card link="/web/webThirteen" title="AutonomouStuff" text="View Description" img={webThirteen} width={width} height={height}/>
        <Card link="/web/webFourteen" title="AutonomouStuff Data Calculator" text="View Description" img={webFourteen} width={width} height={height}/>
        <Card link="/web/webFifteen" title="Manitowoc Small Crawler Crane" text="View Description" img={webFifteen} width={width} height={height}/>
        <Card link="/web/webSixteen" title="1PURE CBD" text="View Description" img={webSixteen} width={width} height={height}/>
        <Card link="/web/webSeventeen" title="Potain Self-Erecting Crawler Crane" text="View Description" img={webSeventeen} width={width} height={height}/>
        <Card link="/web/webEighteen" title="Best Estimate Pro" text="View Description" img={webEighteen} width={width} height={height}/>
      </div>
      <div>
        <h2>More Work</h2>
        <h3>Illinois State University</h3>
        <ul>
          <li><strong>Role:</strong> Web Design and Developer Intern<br/><a href="http://internationalstudies.illinoisstate.edu/">International Studies and Programs</a></li>
          <li><strong>Role:</strong> Web Design and Developer Intern<br/><a href="http://internationalstudies.illinoisstate.edu/">International Studies and Programs</a></li>
          <li><strong>Role:</strong> Web Design and Developer Intern<br/>LGBTQ Studies and Services</li>
          <li><strong>Role:</strong> Web Design and Developer Intern<br/><a href="http://seniorprofessionals.illinoisstate.edu/">Senior Professionals</a></li>
          <li><strong>Role:</strong> Web Design and Developer Extra Help<br/>Human Resources</li>
          <li><strong>Role:</strong> Web Design and Developer Extra Help<br/>Office of Parking and Transportation</li>
          <li><strong>Role:</strong> Web Design and Developer Extra Help<br/>Office of the Comptroller | Payroll</li>
          <li><strong>Role:</strong> Web Design and Developer Extra Help<br/><a href="http://purchasing.illinoisstate.edu/">Office of the Comptroller | Purchasing</a></li>
          <li><strong>Role:</strong> Web Design and Developer Student Worker<br/><a href="http://ole.illinoisstate.edu/">Organization of Latino/a employees</a></li>
          
          
        </ul>
        <h3>State Farm</h3>
        <p><small>Due to legal restrictions I am unable to display this work.</small></p>
        <ul>
          <li><strong>State Farm</strong> - UI Design for ABS Mobile <em>Web-App</em> - <br/>Online Tool designed for State Farm Agents to be able to access their Book of Business and view details on the cutsomer on the go.</li>
          <li><strong>State Farm</strong> - UI Design for State Farm Help Center - <br/>Allows customers to contact their agent or a Help Rep on StateFarm.com</li>
          <li><strong>State Farm</strong> - UI Design Modification for Project "KnightHawk" <em>Android App</em></li>
          <li><strong>State Farm</strong> - UI Design for "Sales Leader Tools" <em>Android and iOS App</em> - <br/>Allows a State Farm Sales Leader to contact agents within their territory on the go, also allows them to record their milage and expenses on the go</li>
          <li><strong>State Farm</strong> - UI/UX Design for Agency Suite of Tools <em>Web-App</em> - <br/>Allows State Farm agents to work on their business plan, assist team members, and veiw their metrics. Also allows the Sales Leaders and higher roles to do similiar functions</li>
          <li><strong>State Farm</strong> - UI/UX Design Agency Navigator <em>Android and iOS app</em> - <br/>Part of the "Sales Leader Tools" package. Allows Sales leaders view thier agents office locations, view their goals, contact their agents, and view agents business plan and metrics.</li>
          <li><strong>State Farm</strong> - Interactive Prototype for ABS Mobile.</li>
          <li><strong>State Farm</strong> - Interactive Prototype for Renters and Condo Insurance Quote processes.</li>
        </ul>
        <h3>Onefire Media</h3>
        <ul>
          <li><strong>Role:</strong> Junior Front-End Developer - Site Updates<br/>Maui Jim Ocean Fest</li>
          <li><strong>Role:</strong> Junior Front-End Developer - Site Updates<br/>Maui Jim Eye Recommend</li>
          <li><strong>Role:</strong> Junior Front-End Developer - Site Updates<br/><a href="http://midwesternsecurities.com/">Midwestern Solutions</a></li>
          <li><strong>Role:</strong> Junior Front-End Developer / Designer - Site Updates<br/><a href="http://www.integrityts.com/">Integrity Technology Solutions</a></li>
          <li><strong>Role:</strong> Junior Front-End Developer / Designer - Site Redesign<br/>Timbuktech</li>
          <li><strong>Role:</strong> Junior Front-End Developer - Site Updates<br/><a href="https://bremerjewelry.com/">Bremer Jewlery</a></li>
          <li><strong>Role:</strong> Design / Animation - Web Ads<br/>MMI Agency</li>
        </ul>
        <h3>AutonomouStuff</h3>
        <ul>
          <li><strong>Role:</strong> Front-End Web Developer/Web Designer - Platform Selection Tool<br/><a href="https://autonomoustuff.com/platform/platform-selector/">AutonomouStuff Platform Selector Guide</a></li>
          <li><strong>Role:</strong> Project Manager - AutonomouStuff Website Redesign</li>
        </ul>
        <h3>Keplr Vision</h3>
        <ul>
          <li><strong>Role:</strong> Web Designer/Front-End Developer - Keplr Vision Employee Portal</li>
          <li><strong>Role:</strong> Web Designer/Front-End Developer - Partner SEO Updates</li>
        </ul>
        <h3>MComm Group</h3>
        <ul>
          <li><strong>Role:</strong> Front-End Developer - MComm CRM Redesign</li>
          <li><strong>Role:</strong> Front-End Developer - 1Pure CBD Doctors Series Promo Page</li>
        </ul>
        <h3>Brado</h3>
        <ul>
          <li><strong>Role:</strong> Senior Front-End Developer - Email Templates<br/>Bauch + Lomb</li>
          <li><strong>Role:</strong> Senior Front-End Developer - Email Templates<br/>Avellino</li>
          <li><strong>Role:</strong> Senior Front-End Developer - Email Templates<br/>Baxter</li>
          <li><strong>Role:</strong> Senior Front-End Developer - Site Updates<br/><a href="https://www.geneticsandeyecare.com/">Genetics and Eyecare Today</a></li>
          <li><strong>Role:</strong> Senior Front-End Developer - Site Updates<br/><a href="https://smartmouth.com/">Smart Mouth</a></li>
          <li><strong>Role:</strong> Senior Front-End Developer - Site Updates<br/><a href="https://www.infertile.com/">Infertility Center of St. Louis</a></li>
        </ul>
      </div>
    </Layout>
  )
}