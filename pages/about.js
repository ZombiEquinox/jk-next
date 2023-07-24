import Layout from "../components/layout"
import Head from 'next/head'
import Link from 'next/link'

export default function About(){
  return (
    <Layout>
      <Head>
        <title>About | Jonathan A Klein</title>
      </Head>
      <div className="my-6">
        <h1 className="text-center text-base md:text-3xl">
          About Jonathan Klein
        </h1>
      </div>
      <p>
        I was born on into a family of four older brothers and one older sister.
        When I was younger I always had a passion for art. As I grew older, my
        passion became a hobby and I became friends with other artists in
        school. The older I became, the more the technology grew, and I found
        myself exploring new forms of art. I started to use PhotoShop and
        Windows Movie Maker. I started my video editing life by creating Anime
        Music Videos in the 7th and 8th grade from random clips of Anime I had
        on my computer. As time rolled on, I dove more and more into movie
        editing. In my Senior Year of high school, I was asked to make a video
        of our school experience. I spent 3 months working on this video,
        everyday for 2-3 hours a day. On graduation day I sold the video for $5
        a disc.
      </p>
      <p>
        While in highschool, I attended Bradley University for a Summer Graphic
        Design session. There I was taught basic skills in graphic design and
        web design. The following year I attended Illinois Central College for
        Graphic Design for college credit during my Junior year of High School.
        While I was attending this class, we were asked to design new Student
        ID's. After we completed the assignment, we were told that each design
        was sent into a committee and three cards were chosen: one for the new
        Student ID, one for the IT department, and one for Faculty. Mine was
        chosen to be the new IT department ID Card.
      </p>
      <p>
        After highschool, I attended Illinois Central College to get my
        associates in Art. While I was here I took multiple classes to broaden
        my artistic ability. Some of the classes I have taken include: 2D & 3D
        Animation, Multimedia Production and PhotoShop Techniques.
      </p>
      <p>
        After my time at Illinois Central College, I attended Illinois State
        University. I applied to get into the Arts Technology Program, now
        Creative Technologies Program. Unfortunately, I did no get in right
        away, but I did not give up. While I was not in the Program I was in the
        Graphics Communication Program which I developed my skills in web design
        and printing. Even though I was not in the program, I was allowed to
        still take an Arts Technology Class, Sound Design 2. There I learned how
        to manipulate sound, to clean it up, and construct it to what I need.
        The following semester I was accepted into the Arts Technology Program
        and my experience in arts technology finally began.
      </p>
      <p>
        While attending Illinois State University, I accepted an Internship
        working at Illinois State University working in Web &amp; Interactive
        Communications as a Graphic Design Intern. I worked on a number of
        websites, including{" "}
        <a href="http://seniorprofessionals.illinoisstate.edu/">
          Senior Professionals
        </a>
        ,{" "}
        <a href="http://healthservices.illinoisstate.edu/">
          Student Health Services
        </a>
        , and some Graphic Design work for{" "}
        <a href="http://counseling.illinoisstate.edu/">
          Student Counseling Services
        </a>
        , view more in my <Link href="/web">Web Design</Link> and{" "}
        <Link href="/graphic_design">Graphic Design</Link> portfolio. I
        graduated from Illinois State University with a Bachelors in Science in
        a Major of Art's Technology with the Exceptional Merit in the Arts
        award. After graduation I was hired on at Illinois State University as a
        Graphic Designer Extra Help, where I continued to help Illinois State
        University with the design of web pages and the development of new
        features.
      </p>
      <p>
        Through <a href="http://www.teksystems.com/">TekSystems</a> I was able
        to obtain a position working with{" "}
        <a href="https://www.statefarm.com">State Farm</a> as a Visualization
        Project Lead, where I use my skills in HTML5/CSS/JavaScript to create
        prototype websites for user experience testing purposes. Along with my
        skills in Photoshop and Illustrator I create and update documentation
        for projects and creating high-fedility wire frames.
      </p>
      <p>
        After my time with State Farm was over, I started new position at{" "}
        <a href="https://onefire.com/">OneFire</a> as a Front-End Developer. I
        was able to use previous skills in UI/UX design to also take over web
        and application design. I designed and Developed a lot of really cool
        websites and mobile applications including the{" "}
        <a href="https://riverplex.org/">Peoria Riverplex</a>.
      </p>
      <p>
        Moving my career forward I began working at{" "}
        <a href="https://autonomoustuff.com/">AutonomouStuff</a> as Front-End
        Web Developer. Using my multimedia background I did video production,
        Graphic Design, Digital Marketing, SEO, as well as managing and
        developing the company website and creating new tools in ReactJS.
      </p>
      <p>
        Eventually it was time for me to move on and it was time to move on to
        my next journey. That is when I started a new position at{" "}
        <a href="https://keplrvision.com/">Keplr Vision</a>. While at Keplr
        Vision I maintained their corporate website, built and maintained the
        company Intranet of over 1000 employees across the continental United
        States, and managed several partner websites. While exploring my new
        found interest in Cyber Security I assisted the IT department in
        preserving HIPAA compliance across our systems as well as our partners.
      </p>
      <p>
        With the events of 2020 impacting millions, I was forced to seek new
        employment. My next journey lead me to a small Marketing firm called{" "}
        <a href="https://www.mcommgroup.com/">MComm Group</a>. While at MComm I
        was their Front End Web Developer, I developed multiple websites on
        Wordpress and created a store on Shopify.
      </p>
      <p>
        As my journey continued, I joined the wonderful team at{" "}
        <a href="https://brado.net/">Brado</a> as their Senior Front End
        Developer. With the brado team we create Email Templates, WordPress and
        Drupal websites, and create applications using ReactJS and VueJS.{" "}
      </p>
    </Layout>
  );
}