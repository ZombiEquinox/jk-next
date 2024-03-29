import Layout from "../components/layout"
import Head from 'next/head'
import Card from '../components/card'
import { fetchWebProjects } from "../src/utils"

const Web = (webProjects)=>{
  let width = 600;
  let height = 600;
  return (
    <Layout>
      <Head>
        <title>Web Development and Design | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">
          Web Development and Design
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {webProjects.data.map((project) => (
          <Card
            key={project.sys.id}
            link={`/web/${project.fields.webId}`}
            title={project.fields.title}
            text="View Description"
            img={project.fields.thumbnail}
            width={width}
            height={height}
          />
        ))}

      </div>
      <div>
        <h2 className="text-base md:text-2xl">More Work</h2>
        <h3 className="text-base md:text-xl">Illinois State University</h3>
        <ul>
          <li>
            <strong>Role:</strong> Web Design and Developer Intern
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://internationalstudies.illinoisstate.edu/"
            >
              International Studies and Programs
            </a>
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Intern
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://internationalstudies.illinoisstate.edu/"
            >
              International Studies and Programs
            </a>
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Intern
            <br />
            LGBTQ Studies and Services
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Intern
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://seniorprofessionals.illinoisstate.edu/"
            >
              Senior Professionals
            </a>
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Extra Help
            <br />
            Human Resources
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Extra Help
            <br />
            Office of Parking and Transportation
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Extra Help
            <br />
            Office of the Comptroller | Payroll
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Extra Help
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://purchasing.illinoisstate.edu/"
            >
              Office of the Comptroller | Purchasing
            </a>
          </li>
          <li>
            <strong>Role:</strong> Web Design and Developer Student Worker
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://ole.illinoisstate.edu/"
            >
              Organization of Latino/a employees
            </a>
          </li>
        </ul>
        <h3 className="text-base md:text-xl">State Farm</h3>
        <p>
          <small>
            Due to legal restrictions I am unable to display this work.
          </small>
        </p>
        <ul>
          <li>
            UI Design for ABS Mobile <em>Web-App</em> - <br />
            Online Tool designed for State Farm Agents to be able to access
            their Book of Business and view details on the cutsomer on the go.
          </li>
          <li>
            UI Design for State Farm Help Center - <br />
            Allows customers to contact their agent or a Help Rep on
            StateFarm.com
          </li>
          <li>
            UI Design Modification for Project "KnightHawk" <em>Android App</em>
          </li>
          <li>
            UI Design for "Sales Leader Tools" <em>Android and iOS App</em> -{" "}
            <br />
            Allows a State Farm Sales Leader to contact agents within their
            territory on the go, also allows them to record their milage and
            expenses on the go
          </li>
          <li>
            UI/UX Design for Agency Suite of Tools <em>Web-App</em> - <br />
            Allows State Farm agents to work on their business plan, assist team
            members, and veiw their metrics. Also allows the Sales Leaders and
            higher roles to do similiar functions
          </li>
          <li>
            UI/UX Design Agency Navigator <em>Android and iOS app</em> - <br />
            Part of the "Sales Leader Tools" package. Allows Sales leaders view
            thier agents office locations, view their goals, contact their
            agents, and view agents business plan and metrics.
          </li>
          <li>Interactive Prototype for ABS Mobile.</li>
          <li>
            Interactive Prototype for Renters and Condo Insurance Quote
            processes.
          </li>
        </ul>
        <h3 className="text-base md:text-xl">Onefire Media</h3>
        <ul>
          <li>
            <strong>Role:</strong> Junior Front-End Developer - Site Updates
            <br />
            Maui Jim Ocean Fest
          </li>
          <li>
            <strong>Role:</strong> Junior Front-End Developer - Site Updates
            <br />
            Maui Jim Eye Recommend
          </li>
          <li>
            <strong>Role:</strong> Junior Front-End Developer - Site Updates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://midwesternsecurities.com/"
            >
              Midwestern Solutions
            </a>
          </li>
          <li>
            <strong>Role:</strong> Junior Front-End Developer / Designer - Site
            Updates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.integrityts.com/"
            >
              Integrity Technology Solutions
            </a>
          </li>
          <li>
            <strong>Role:</strong> Junior Front-End Developer / Designer - Site
            Redesign
            <br />
            Timbuktech
          </li>
          <li>
            <strong>Role:</strong> Junior Front-End Developer - Site Updates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bremerjewelry.com/"
            >
              Bremer Jewlery
            </a>
          </li>
          <li>
            <strong>Role:</strong> Design / Animation - Web Ads
            <br />
            MMI Agency
          </li>
        </ul>
        <h3 className="text-base md:text-xl">AutonomouStuff</h3>
        <ul>
          <li>
            <strong>Role:</strong> Front-End Web Developer/Web Designer -
            Platform Selection Tool
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://autonomoustuff.com/platform/platform-selector/"
            >
              AutonomouStuff Platform Selector Guide
            </a>
          </li>
          <li>
            <strong>Role:</strong> Project Manager - AutonomouStuff Website
            Redesign
          </li>
        </ul>
        <h3 className="text-base md:text-xl">Keplr Vision</h3>
        <ul>
          <li>
            <strong>Role:</strong> Web Designer/Front-End Developer - Keplr
            Vision Employee Portal - WordPress
          </li>
          <li>
            <strong>Role:</strong> Web Designer/Front-End Developer - Partner
            SEO Updates
          </li>
        </ul>
        <h3 className="text-base md:text-xl">MComm Group</h3>
        <ul>
          <li>
            <strong>Role:</strong> Front-End Developer - MComm CRM Redesign -
            Bootstrap / Ruby on Rails
          </li>
          <li>
            <strong>Role:</strong> Front-End Developer - 1Pure CBD Doctors
            Series Promo Page - Foundations / Jekyll
          </li>
          <li>
            <strong>Role:</strong> Front-End Developer -{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mobileagsolutions.com/"
            >
              Mobile Ag Solutions Promo page
            </a>{" "}
            - Foundations / Jekyll
          </li>
          <li>
            <strong>Role:</strong> Front-End Developer - Mobile Ag Solutions
            Prototype - Adobe XD
          </li>
        </ul>
        <h3 className="text-base md:text-xl">Brado</h3>
        <ul>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Email Templates
            <br />
            Bauch + Lomb
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Email Templates
            <br />
            Avellino
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Email Templates
            <br />
            Baxter
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Site Updates
            <br />
            Baxter - Drupal
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Site Updates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.geneticsandeyecare.com/"
            >
              Genetics and Eyecare Today
            </a>{" "}
            - WordPress
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Site Updates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://smartmouth.com/"
            >
              Smart Mouth
            </a>{" "}
            - WordPress
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Site Updates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.infertile.com/"
            >
              Infertility Center of St. Louis
            </a>{" "}
            - WordPress
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Site
            Updates/Animation/Email Templates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.healthcarehighways.com/"
            >
              Healthcare Highways
            </a>{" "}
            - Hubspot
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Site
            Updates/Email Templates
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.revelohealth.net/"
            >
              Revelohealth
            </a>{" "}
            - Hubspot
          </li>
          <li>
            <strong>Role:</strong> Senior Front-End Developer - Development/Site
            Updates/Webmaster
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://brado.net/"
            >
              Brado.net
            </a>{" "}
            - WordPress
          </li>
        </ul>
        <h3 className="text-base md:text-xl">Freelance</h3>
        <ul>
          <li>
            <strong>Role:</strong> Design Consultant
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://yogaatthepark.com/"
            >
              Yoga at the park
            </a>{" "}
            - Laravel/Bootstrap
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const entries = await fetchWebProjects();
  //let data = entries.filter((entry) => entry.sys.contentType.sys.id === "web");
  //const fields = data.map((entry) => entry.fields);
  return {
    props: {
      data:entries
    },
  };
}

export default Web;