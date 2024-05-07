import React from 'react'

const Navbar = () => {
  return (
    <>
     <header class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
        <div class="container my-2">
           
            <a class="navbar-brand" href="https://yatrirailways.com/">
            <img src="https://yatrirailways.com/bl-content/uploads/Yatri.png" alt="Yatri" class="img-fluid"/>
        </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsWow" aria-controls="navbarsWow" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
           
            
            <div class="collapse navbar-collapse" id="navbarsWow">
             
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">About Yatri</a>
                        <div class="dropdown-menu">
                            <a href="https://yatriapp.slite.page/p/U1f82kuGTMRD5V/v3-0-0-Android" target="_blank" class="dropdown-item">What's New</a>
                            <a href="https://yatrirailways.com/about-yatri-the-official-app-from-mumbai-railways" class="dropdown-item">App Features</a>
                            <a href="https://yatrirailways.com/app-feedback" class="dropdown-item">Feedback</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Yatri Guides</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a href="https://yatrirailways.com/explore-mumbai" class="dropdown-item">Explore Mumbai</a>
                            <a href="https://yatrirailways.com/travel-hacks" class="dropdown-item">Mumbai Local Travel Hacks</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Live Announcements</a>
                        <div class="dropdown-menu">
                            <a href="https://yatrirailways.com/live-railway-announcements" class="dropdown-item">Railway Announcements</a>
                            <a href="https://yatrirailways.com/commuter-news" class="dropdown-item">Commuter News</a>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="https://yatrirailways.com/media-coverage">Media Coverage</a></li>
                    <li class="nav-item"><a class="nav-link" href="https://yatrirailways.com/advertise-with-us">Advertise with us</a></li>
                </ul>
             
            </div>
        </div>
    </header>
    
    
    </>
  )
}

export default Navbar