import { useState } from 'react'
import './App.css'

function UnoButton() {
  /*
  const audioRef: any = useRef(null);
  audioRef.current = new Audio("assets/uno2.mp3");

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  });*/

  const onclick = () => {
    //audioRef.current.play();
    document.documentElement.classList.remove("presunrise");
    document.documentElement.classList.add("sunrise");
    document.getElementById("siteopen")?.classList.add("disappear");
    document.getElementById("content")?.classList.remove("blur-xl");
  }

  return (
    <button className="
        rounded-full 
        bg-black hover:cursor-pointer 
        hover:bg-amber-200 
        hover:text-red-600 
        w-36 
        h-24 
        text-4xl
      " id="siteopen" onClick={onclick}>
        <i><b>UNO!</b></i>
      </button>
  )
}

function TopbarButton({label,hash,color}) {
  const url = (
    <a className={`flex pr-3 pl-3 items-center hover:cursor-pointer hover:bg-amber-200 hover:text-red-600 w-1/4 text-center`} style={{backgroundColor: color}} href={`#${hash}`}><b>{label}</b></a>
  )
  return url
}
/*
function Toptopbar() {
  return (
    
    <span></span>
  )
}
*/
function Topbar() {
  return (
    <div id="topbar" className="mt-4 mb-5 flex text-center justify-between overflow-auto h-10 rounded-full bg-black border-white border-2 ml-5 mr-5 text-2xl">
      <TopbarButton label="About" hash="about" color="darkred"/>
      <TopbarButton label="Photos" hash="photos" color="darkblue"/>
      <TopbarButton label="Blog" hash="blog" color="green"/>
      <TopbarButton label="Join!" hash="join" color="gold"/>
    </div>
  )
}

function ClubPhoto({ src, hoverText }) {
  return (
    <div className="relative w-48 h-48 overflow-hidden rounded shadow-lg group">
      <img src={src} className="object-cover w-full h-full" alt="" />
      <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-black font-semibold text-center px-2">{hoverText}</p>
      </div>
    </div>
  )
}

// photos i guess
const PhotoContent = () => (
  <div className="flex justify-center space-x-4 px-4 py-2 max-w-full bg-black border-white border-2">
    <ClubPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTstQsVR6p8NaJD3Ig-md_Izoc7dUVDDCUw&s" hoverText="Make your own cards!"/>
    <ClubPhoto src="https://m.media-amazon.com/images/I/71RSZ2oSJ4L.jpg" hoverText="The set we provide"/>
    <ClubPhoto src="https://www.thelinehotel.com/wp-content/uploads/2023/05/11211519/EE8A8651-e1683840156963.jpg" hoverText="Hotel day!"/>
    <ClubPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgC3Rb6aTcUoGNwOMK1RzVLFuv5neDMUz_3g&s" hoverText="Late night sessions..."/>
    <ClubPhoto src="https://www.calliinstitute.com/blog/wp-content/uploads/2020/10/Two-people-playing-card-game-e1601651326668.jpg" hoverText="Why not outside?"/>
    <ClubPhoto src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR0y-P4y_TeTVqje9bNYYXElYQ1JK13jrqg&s" hoverText="Types of tournaments we have 👀"/>
  </div>
)

const AboutContent = () => (
  <div className="ml-auto mr-auto flex max-w-4/5 bg-black border-white border-2 min-h-96 text-2xl" style={{flexDirection: "column"}}>
    <p className="mt-5 ml-5 mr-5">Thank you for visiting our website! 
      A group of inteprid upperclassmen founded the club in 2024,
       with the purpose of introducing more people to the wonderful game of UNO! (Not that it isn't already popular...)
       We have about 8 members, and growing fast.
        Here's some key info for you:
    </p>
    <ul className="mt-5 mb-15">
      <li>• We meet every FRIDAY from 4pm to 5pm in F601</li>
      <li>• UNO sets are already provided, but if you'd like to bring your own decks with fun wild cards, we won't stop you ☺</li>
      <li>• Our only rule is to be a cool person. That's it. No past experience required, we love to teach.</li>
    </ul>
    <p>We'll see you soon! 👋</p>
  </div>
)

const BlogContent = () => (
  <div style={{flexDirection: "column"}} className="ml-auto mr-auto flex max-w-3/5 bg-black border-white border-2 min-h-96 text-1xl">
    <p className="mt-5">May 18, 2025</p>
    <br></br>
    <p>The Day the Club Stood Still</p>
    <br></br>
    <p>Tobin D.</p>
    <br></br>
    <p className="mt-5 m">If you were there, you remember. We were having another regular meeting, that regular-feeling Friday. Everyone was having a good time playing Uno. If you'd asked me at the time, I'd say it was a perfect meeting.</p>
    <br></br>
    <p>Until <i>they</i> arrived.</p>
    <br></br>
    <p>The band of kids who brought their own deck. Not just wild cards, but their own decks. The ones who rigged the game.</p>
    <br></br>
    <p>They marched right up to me, and asked the bone-chilling question:</p>
    <br></br>
    <p><i>Wanna play?</i></p>
    <br></br>
    <p>The club turned to face us, shocked at the return of this gang of pro Uno players-<i>no,</i> pro isn't the right word.</p>
    <br></br>
    <p>I didn't know how to answer, so I just stood there. For minutes. About twelve; I counted.</p>
    <br></br>
    <p>After silence had filled the room for long enough, the ringleader turned away and left, the gang following him.</p>
    <br></br>
    <p>If he comes back, I don't want to know.</p>
  </div>
)

const JoinContent = () => (
  <div className="ml-auto mr-auto flex max-w-2/5 bg-black border-white border-2 min-h-96 text-2xl" style={{flexDirection: "column"}}>
    <p className="mt-5 ml-5 mr-5">Decided you want to become a member of our prestigious club? Press on the link below to open the registration form.</p>
    <a className="mt-20 mb-24 underline text-blue-400" href="https://docs.google.com/forms/d/e/1FAIpQLSeZHT0AKXKJ2TJwzQnyoCuzwIXLUk3Z_G6_2b2QhGm7sMq3eg/viewform?usp=header" target="_blank">Click me!!!</a>
    <p>We'll see you soon! 👋</p>
  </div>
)

const MainContent = () => (
  <div className="ml-auto mr-auto flex max-w-1/5 bg-black border-white border-2 min-h-64 text-2xl" style={{flexDirection: "column"}}>
    <p className="mt-5 ml-5 mr-5">Welcome to our club website. Press the options in the top bar to navigate the site.</p>
  </div>
)

function App() {
  const [page, setPage] = useState("Main")

  window.onhashchange = (event) => {
    const newURL: string = event.newURL;
    switch(newURL.split("#")[1]) {
      case "blog":
        setPage("Blog")
      break;
      case "photos":
        setPage("Photo")
      break;
      case "join":
        setPage("Join")
      break;
      case "about":
        setPage("About")
      break;
      default:
        setPage("Main")
      break;
    }
  }

  const dict = {
    Main: <MainContent />,
    About: <AboutContent />,
    Photo: <PhotoContent />,
    Blog: <BlogContent />,
    Join: <JoinContent />
  }
  document.documentElement.classList.add("presunrise");
  return (
    <>
      <div id="toptopbar" className="flex text-center items-center space-x-3 ml-10">
        <span className="font-bold text-4xl">RCHS</span>
        <UnoButton />
        <span className="font-bold text-4xl">Club</span>
      </div>
      <div id="content">
        <Topbar />
        {dict[page]}
      </div>
      <p className="mt-1">Made with ♥ in Sacramento</p>
      <p>For MESA Hack 2025</p>
    </>
  )
}

export default App
