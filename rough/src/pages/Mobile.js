import React from "react";
import Tostation from "../assets/images/To_train.svg"
import Fromstation from "../assets/images/From_train.svg";
const Mobile = () => {
  return (
    <>
      <div className="nav-heading flex items-center justify-between gap-10 px-20 h-55 border-b border-solid border-charcoal-100 bg-white mb-3">
        <h1 className="h1 text-xxl font-bold text-center w-full">
          Check Seat Availability
        </h1>
      </div>
      
      <div className="SearchBox-module_searchContainer__N6EAo SearchBox-module_true__-K8Gf">
        <div className="SearchBox-module_swapContainer__LNhb1">
          <img className="" alt="search-swap" src="https://cdn.confirmtkt.com/img/icons/ic_search_swap.svg" />
        </div>
        <div className="SearchBox-module_searchField__GvdEU">
        <img
      alt="Frame icon"
      loading="lazy"
      
      decoding="async"
      data-nimg="1"
      src={Fromstation}
    />
          <div className="SearchBox-module_input__sO9DT">
            <label>Enter From</label>
          </div>
        </div>
        <div className="SearchBox-module_horizontalSeperator__EYG9O"></div>
        <div className="SearchBox-module_searchField__GvdEU">
        <img
    alt="Frame icon"
    loading="lazy"
    
    decoding="async"
    data-nimg="1"
    src={Tostation}
  />
          <div className="SearchBox-module_input__sO9DT">
            <label>Enter To</label>
          </div>
        </div>
        <div className="SearchBox-module_horizontalSeperator__EYG9O"></div>
        <div className="SearchBox-module_searchField__GvdEU">
          <img src="https://cdn.confirmtkt.com/img/icons/ic_search_calender.svg" alt="calender" />
          <div className="SearchBox-module_dateContainer__ILhLr">
            <div className="SearchBox-module_input__sO9DT SearchBox-module_doj__80FYV">
              <div className="MuiFormControl-root MuiTextField-root css-165mck1">
                <div className="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd Mui-readOnly MuiInputBase-readOnly css-18vncb4">
                  <input
                    aria-invalid="false"
                    autoComplete="off"
                    id=":rc:"
                    name="doj"
                    placeholder="EEEE, DD MMMM"
                    readOnly=""
                    type="text"
                    aria-label="Choose date, selected date is Apr 30, 2024"
                    inputMode="text"
                    className="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd Mui-readOnly MuiInputBase-readOnly css-z3ltur"
                    value="Tue, 30 Apr"
                  />
                </div>
              </div>
            </div>
            <div className="SearchBox-module_switchDate__4hPJg">
              <div id="today" className="SearchBox-module_date__yhCi-">Today</div>
              <div id="tomorrow" className="SearchBox-module_date__yhCi-">Tomorrow</div>
              <div id="dayAfter" className="SearchBox-module_date__yhCi-">Day After</div>
            </div>
          </div>
        </div>
        <div className="SearchBox-module_horizontalSeperator__EYG9O"></div>
        <div className="irjiU">
          <span className="Rttgl"> GENERAL </span>
          <span className=""> GENERAL</span>
          <span className="">TATKAL</span>
        </div>
        <button
          className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation SearchBox-module_searchBtn__2jDRT css-hmgd9x"
          tabIndex="0"
          type="button"
        >
          SEARCH TRAINS
          <span className="MuiTouchRipple-root css-w0pj6f"></span>
        </button>
      </div>
    </>
  );
};

export default Mobile;
