import React from "react";
import Fromstation from "../assets/images/From_train.svg";
import Swap from "../assets/images/Swap.svg";
import Tostation from "../assets/images/To_train.svg"
import Date from "../assets/images/Date.svg"
const DeskSeat = () => {
  return (
    <div className="desktoptrainseat">
       <div className="desktop-trainseat-tab">
          <ul className="desktop-trainseat-list">
          <li className="desktop-traintab-list">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium seatsvg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="InfoOutlinedIcon"
            >
              <path
                d="M14.4582 18.2629H7.55944C7.33824 18.2629 7.13778 18.1165 7.041 17.8888C6.93731 17.6612 6.95805 17.3847 7.08247 17.1733L8.96961 14.0101C9.15625 13.7011 9.52262 13.6198 9.7853 13.8393C10.048 14.0589 10.1171 14.4898 9.93047 14.7988L8.69311 16.8724H13.3799L12.1978 14.7419C12.0181 14.4248 12.0941 13.9938 12.3706 13.7824C12.6402 13.571 13.0066 13.6604 13.1863 13.9857L14.9698 17.1814C15.0873 17.3928 15.1011 17.6612 14.9974 17.8888C14.8937 18.1084 14.6932 18.2548 14.479 18.2548L14.4582 18.2629Z"
                fill="inherit"
                stroke="none"
              ></path>
              <path
                d="M12.7499 9.54595H8.32585C8.00096 9.54595 7.73828 9.23695 7.73828 8.85476C7.73828 8.47258 8.00096 8.16357 8.32585 8.16357H12.7499C13.0748 8.16357 13.3375 8.47258 13.3375 8.85476C13.3375 9.23695 13.0748 9.54595 12.7499 9.54595Z"
                fill="inherit"
                stroke="none"
              ></path>
              <path
                d="M14.0917 15.0086H6.557C6.26667 15.0086 6.02473 14.7646 5.97634 14.4394L4.04773 4.69773C3.93713 4.12852 4.02008 3.54304 4.28276 3.03888C4.55235 2.53473 4.97402 2.18507 5.47172 2.05496C6.48788 1.78662 7.50403 2.52659 7.73906 3.71381L9.10775 10.6094H14.0917C15.1355 10.6094 15.9858 11.5933 15.9858 12.8131C15.9858 14.0328 15.1355 15.0167 14.0917 15.0167V15.0086ZM7.02706 13.6262H14.0917C14.4927 13.6262 14.8106 13.2603 14.8106 12.8049C14.8106 12.3496 14.4858 11.9836 14.0917 11.9836H8.64461C8.37502 11.9836 8.13308 11.7641 8.07086 11.447L6.59848 4.02281C6.50861 3.57557 6.12151 3.2991 5.7344 3.40481C5.54085 3.4536 5.38186 3.59183 5.27817 3.77886C5.18139 3.95776 5.14683 4.17731 5.18831 4.3806L7.02706 13.6262Z"
                fill="inherit"
                stroke="none"
              ></path>
            </svg>{" "}
            Seat Availability
          </li>
          <li className="desktop-traintab-list">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium seatsvg "
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="TrainOutlinedIcon"
            >
              <circle cx="8.5" cy="14.5" r="1.5"></circle>
              <circle cx="15.5" cy="14.5" r="1.5"></circle>
              <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 4.96.48 5.57 1H6.43c.61-.52 2.06-1 5.57-1zM6 7h5v3H6V7zm12 8.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5zm0-5.5h-5V7h5v3z"></path>
            </svg>{" "}
            Check station
          </li>
          <li className="desktop-traintab-list">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium seatsvg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AssignmentOutlinedIcon"
            >
              <path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path>
            </svg>
            PNR Status
          </li>
          <li className="desktop-traintab-list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.4499 6C12.7799 6 13.0624 5.8825 13.2974 5.6475C13.5324 5.4125 13.6499 5.13 13.6499 4.8C13.6499 4.47 13.5324 4.1875 13.2974 3.9525C13.0624 3.7175 12.7799 3.6 12.4499 3.6C12.1199 3.6 11.8374 3.7175 11.6024 3.9525C11.3674 4.1875 11.2499 4.47 11.2499 4.8C11.2499 5.13 11.3674 5.4125 11.6024 5.6475C11.8374 5.8825 12.1199 6 12.4499 6ZM12.4499 10.41C13.6699 9.29 14.5749 8.2725 15.1649 7.3575C15.7549 6.4425 16.0499 5.63 16.0499 4.92C16.0499 3.83 15.7024 2.9375 15.0074 2.2425C14.3124 1.5475 13.4599 1.2 12.4499 1.2C11.4399 1.2 10.5874 1.5475 9.8924 2.2425C9.1974 2.9375 8.8499 3.83 8.8499 4.92C8.8499 5.63 9.1449 6.4425 9.7349 7.3575C10.3249 8.2725 11.2299 9.29 12.4499 10.41ZM12.4499 12C10.8399 10.63 9.6374 9.3575 8.8424 8.1825C8.0474 7.0075 7.6499 5.92 7.6499 4.92C7.6499 3.42 8.1324 2.225 9.0974 1.335C10.0624 0.445 11.1799 0 12.4499 0C13.7199 0 14.8374 0.445 15.8024 1.335C16.7674 2.225 17.2499 3.42 17.2499 4.92C17.2499 5.92 16.8524 7.0075 16.0574 8.1825C15.2624 9.3575 14.0599 10.63 12.4499 12Z"
                fill="#7A7A7A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7339 12.5747C11.9641 12.781 12.2028 12.9893 12.45 13.1997C12.7638 12.9327 13.0638 12.669 13.35 12.4086V12.5747H19V8.69969H16.6443C16.9773 8.18451 17.2414 7.68451 17.4364 7.19969H18.8C18.5935 6.88987 18.2269 6.62153 17.7004 6.39466C17.8002 5.99703 17.85 5.61038 17.85 5.23471C17.85 5.09009 17.846 4.94799 17.8381 4.80841C18.1303 4.9057 18.3968 5.01529 18.6375 5.13719C19.2792 5.46219 19.75 5.87469 20.05 6.37469C20.35 6.87469 20.5 7.48303 20.5 8.19969V17.6997C20.5 18.683 20.1625 19.5122 19.4875 20.1872C18.8125 20.8622 17.9833 21.1997 17 21.1997L18.5 22.6997V23.1997H16.75L14.75 21.1997H10.25L8.25 23.1997H6.5V22.6997L8 21.1997C7.01667 21.1997 6.1875 20.8622 5.5125 20.1872C4.8375 19.5122 4.5 18.683 4.5 17.6997V8.19969C4.5 7.51636 4.65833 6.92053 4.975 6.41219C5.29167 5.90386 5.77917 5.48719 6.4375 5.16219C6.62927 5.06752 6.83589 4.97992 7.05736 4.89939C7.05247 5.00962 7.05002 5.12139 7.05002 5.23471C7.05002 5.63113 7.10554 6.03977 7.21659 6.46063C6.81541 6.66769 6.50155 6.91405 6.275 7.19969H7.46361C7.65866 7.68451 7.92271 8.18451 8.25574 8.69969H6V12.5747H11.7339ZM17 14.0747H6V17.6997C6 18.283 6.19167 18.783 6.575 19.1997C6.95833 19.6164 7.43333 19.8247 8 19.8247H17C17.5667 19.8247 18.0417 19.6164 18.425 19.1997C18.8083 18.783 19 18.283 19 17.6997V14.0747H17ZM8.875 18.3247C9.25833 18.3247 9.58333 18.1914 9.85 17.9247C10.1167 17.658 10.25 17.333 10.25 16.9497C10.25 16.5664 10.1167 16.2414 9.85 15.9747C9.58333 15.708 9.25833 15.5747 8.875 15.5747C8.49167 15.5747 8.16667 15.708 7.9 15.9747C7.63333 16.2414 7.5 16.5664 7.5 16.9497C7.5 17.333 7.63333 17.658 7.9 17.9247C8.16667 18.1914 8.49167 18.3247 8.875 18.3247ZM16.125 18.3247C16.5083 18.3247 16.8333 18.1914 17.1 17.9247C17.3667 17.658 17.5 17.333 17.5 16.9497C17.5 16.5664 17.3667 16.2414 17.1 15.9747C16.8333 15.708 16.5083 15.5747 16.125 15.5747C15.7417 15.5747 15.4167 15.708 15.15 15.9747C14.8833 16.2414 14.75 16.5664 14.75 16.9497C14.75 17.333 14.8833 17.658 15.15 17.9247C15.4167 18.1914 15.7417 18.3247 16.125 18.3247Z"
                fill="#7A7A7A"
              />
            </svg>{" "}
            Live Train Status
          </li>
          <li className="desktop-traintab-list">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-currency-rupee"
              viewBox="0 0 16 16"
            >
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
            </svg>{" "}
            Fare Calculator
          </li>
        </ul>  
         <div class="container seatbook">
         <div class="row">
    
    <div class="col-6">
    <div
            style={{
              fontSize: "23px",
              fontWeight: 400,
              padding: "1.44vw 1.9vw 0 1.9vw",
              fontFamily: "Poppins, sans-serif !important",
              color: "black",
              
            }}
          >
            {" "}
           Check Seat Avaliblity
          </div>
    </div>
          
           <div className="m-3 d-flex">
  <div style={{ position: "relative" }}>
    <input
     
      id="From"
      placeholder="Enter From Station"
      type="text"
      
      style={{
        width: "16vw",
        height: "4vw",
        paddingLeft: "2.5em",
        border:' 1px solid #D8D8D8',
     borderRadius:'4px'
      }}
     
    />
     <div className="frombottom"></div>
    <img
      alt="Frame icon"
      loading="lazy"
      style={{
        width: "30px",
        height: "24px",
        position: "absolute",
        left: "0.5em",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      decoding="async"
      data-nimg="1"
      src={Fromstation}
    />
   
  </div>
  <div style={{margin:'10px',position:'relative'}}>
  <img alt="swap" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="cursor-pointer" src={Swap} style={{color: 'transparent'}}/>
  </div>
  <div style={{ position: "relative", display: "inline-block" }}>
  <input
    
    id="From"
    placeholder="Enter To Station"
    type="text"
    
    style={{
      width: "16vw",
      height: "4vw",
      paddingLeft: "2.5em",
     border:' 1px solid #D8D8D8',
     borderRadius:'4px'
    }}
  />
  <img
    alt="Frame icon"
    loading="lazy"
    style={{
      position: "absolute",
      left: "0.5em",
      top: "50%",
      transform: "translateY(-50%)",
      width: "30px",
      height: "24px",
    }}
    decoding="async"
    data-nimg="1"
    src={Tostation}
  />
</div>
<div >

<div style={{ position: "relative", marginLeft: "20px" }}>

    <input
      
      id="Date"
      placeholder="mm/dd/yyyy"
      type="text"
      
      
      style={{
        width: "12vw",
        height: "4vw",
        paddingLeft: "2.5em",
        border:' 1px solid #D8D8D8',
     borderRadius:'4px'
        
      }}
    />
    <label htmlFor="" className="labelin">Date</label>
    <img
      alt="Frame icon"
      loading="lazy"
      style={{
        width: "30px",
        height: "24px",
        position: "absolute",
        left: "0.5em",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      decoding="async"
      data-nimg="1"
      src={Fromstation}
    />
    
  </div>
 
</div>
<div style={{width: '3.5vw',
  height: '3.6vw',
  borderRadius: '4px',
  border: '1px solid rgb(216, 216, 216)',
  fontWeight: 600,
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgb(150, 150, 150)',
  cursor: 'pointer',
  marginLeft:'10px'}} >20 Apr</div>

 <div style={{width: '3.5vw',
  height: '3.6vw',
  borderRadius: '4px',
  border: '1px solid rgb(216, 216, 216)',
  fontWeight: 600,
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgb(150, 150, 150)',
  cursor: 'pointer',
  marginLeft:'10px'}} >21 Apr</div>

<div><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-13t6lrm" tabindex="0" type="button" data-id="btn_search_trains">SEARCH<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
</div> 


       
        </div> 
      </div> 
    </div>
    </div>
  );
};

export default DeskSeat;
