import React from 'react'
import './App.css';
import Table from 'react-bootstrap/Table';
import Rupee from '../src/assets/images/Ruppe.png'
import Seat from '../src/assets/images/seat.png'
import Train from '../src/assets/images/train.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from 'react-bootstrap';// Assuming Material-UI is used for styling
const Fare = () => {

    const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Logic for handling search submit
    console.log('Search submitted:', searchValue);
  };
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  });
  return (
    <>
  <div className='fare'>
    <div className="card-header card-header-train-links primary-background px-0 mx-md-0 border" style={{ boxShadow: 'none' }}>
      <ul role="tablist" className="nav header-links nav-pills nav-pills-warning nav-pills-icons justify-content-around p-0">
        <li className="nav-item">
          <a role="tablist" className="nav-link header-links" href="/seat-availability/12968">
            <div className="img-container p-2">
              <img src={Seat} alt="Seat Availability" className="mt-1 mx-auto mt-md-0 d-none" style={{ height: '40px', width: '40px' }} />
              <img src={Seat} alt="Seat Availability" className="mt-1 mx-auto mt-md-0 d-block" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="d-block d-sm-inline-block text-dark">
              <div className="d-block d-sm-inline-block">Seat</div> Availability
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a role="tablist" className="nav-link header-links" href="/running-status/12968">
            <div className="img-container p-2">
              <img src={Train} alt="live running status" className="mt-1 mx-auto mt-md-0 d-none" style={{ height: '35px', width: '35px' }} />
              <img src={Train} alt="live running status" className="mt-1 mx-auto mt-md-0 d-block" style={{ height: '35px', width: '35px' }} />
            </div>
            <div className="d-block d-sm-inline-block text-dark">
              <div className="d-block d-sm-inline-block">Check</div> Station
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a role="tablist" className="nav-link header-links" href="/train/12968">
            <div className="img-container p-2">
               <img src={Rupee} alt="train fare" className="mt-1 mx-auto mt-md-0 d-block" style={{ width: '40px', height: '40px' }} />
              <img src={Rupee} alt="train fare" className="mt-1 mx-auto mt-md-0 d-none" style={{ width: '40px', height: '40px' }} />
            </div>
            <div className="d-block d-sm-inline-block text-dark">
              <div className="d-block d-sm-inline-block">Fare</div> Calculator
            </div>
          </a>
        </li>
        
       
      </ul>

      <div>
      <h1 _ngcontent-serverapp-c158="" id="h1" class="text-center ng-star-inserted" style={{margin: '.67em 0 .2em',
    FontSize: '1rem'
}}>  Check for Fare </h1>
      
      <div className="text-center my-3">
      <div className="col-8 col-sm-6 d-inline-block pl-0">
      
<input type="text" id="fname" name="fname" placeholder='Search Train' />
      </div>
      <div className="d-inline-block">
        <Button
          style={{background:'#0077b2'}}
          onClick={handleSearchSubmit}
        >
          Search
        </Button>
      </div>
    </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="mat-form-field-infix ng-tns-c72-8">
          <label
            className="mat-form-field-label ng-tns-c72-8 ng-star-inserted"
            htmlFor="from-station"
            id="mat-form-field-label-9"
            aria-owns="from-station"
          >
            From Station:
          </label>
          <select
            
          >
            <option value="" className='option'></option>
            {/* Add other options here if needed */}
          </select>
          
        </div>
      </div>
      <div className="col">
        <div className="mat-form-field-infix ng-tns-c72-8">
        <label
            className="mat-form-field-label ng-tns-c72-8 ng-star-inserted"
            htmlFor="to-station"
            id="mat-form-field-label-10"
            aria-owns="to-station"
          >
            To Station
          </label>
          <select
            className="mat-select ng-tns-c128-9 ng-tns-c72-8 ng-pristine ng-valid ng-star-inserted ng-touched"
            id="to-station"
            name="toStation"
            tabIndex="0"
            aria-label="To Station"
            aria-required="false"
            aria-disabled="false"
            aria-invalid="false"
            aria-multiselectable="false"
            placeholder="To Station"
          >
            <option value=""></option>
            {/* Add other options here if needed */}
          </select>
          
        </div>
      </div>
    </div>


    {/* ANother one */}

    <div className="row">
      <div className="col">
        <div className="mat-form-field-infix ng-tns-c72-8">
          <label
            className="mat-form-field-label ng-tns-c72-8 ng-star-inserted"
            htmlFor="from-station"
            id="mat-form-field-label-9"
            aria-owns="from-station"
          >
            Date
          </label>
          <select
            
          >
            <option value="" className='option'></option>
            {/* Add other options here if needed */}
          </select>
          
        </div>
      </div>
      <div className="col">
        <div className="mat-form-field-infix ng-tns-c72-8">
        <label
            className="mat-form-field-label ng-tns-c72-8 ng-star-inserted"
            htmlFor="to-station"
            id="mat-form-field-label-10"
            aria-owns="to-station"
          >
           Quota
          </label>
          <select
            className="mat-select ng-tns-c128-9 ng-tns-c72-8 ng-pristine ng-valid ng-star-inserted ng-touched"
            id="to-station"
            name="toStation"
            tabIndex="0"
            aria-label="To Station"
            aria-required="false"
            aria-disabled="false"
            aria-invalid="false"
            aria-multiselectable="false"
            placeholder="To Station"
          >
            <option value=""></option>
            {/* Add other options here if needed */}
          </select>
          
        </div>
        
      </div>
      
    </div>


    {/* another row added */}
    <div className="row">
      <div className="col">
        <div className="mat-form-field-infix ng-tns-c72-8">
          <label
            className="mat-form-field-label ng-tns-c72-8 ng-star-inserted"
            htmlFor="from-station"
            id="mat-form-field-label-9"
            aria-owns="from-station"
          >
            Category
            
          </label>
          <select
            
          >
            <option value="" className='option'></option>
            {/* Add other options here if needed */}
          </select>
          
        </div>
      </div>
      <div className="col">
        <div className="mat-form-field-infix ng-tns-c72-8">
        <label
            className="mat-form-field-label ng-tns-c72-8 ng-star-inserted"
            htmlFor="to-station"
            id="mat-form-field-label-10"
            aria-owns="to-station"
          >
            Class
          </label>
          <select
            className="mat-select ng-tns-c128-9 ng-tns-c72-8 ng-pristine ng-valid ng-star-inserted ng-touched"
            id="to-station"
            name="toStation"
            tabIndex="0"
            aria-label="To Station"
            aria-required="false"
            aria-disabled="false"
            aria-invalid="false"
            aria-multiselectable="false"
            placeholder="To Station"
          >
            <option value=""></option>
            {/* Add other options here if needed */}
          </select>
          
        </div>
      
      </div>
      
    </div>
    <button className='button'>Get fare</button>
    </div>
    <div className='table'>
    <Table striped bordered hover>
      
      <tbody>
        <tr>
          
          <td>Base Charge</td>
          <td>{formatter.format (4898)}</td>
          
          
        </tr>
        <tr>
          
          <td>Reservation Charge</td>
          <td>{formatter.format(60)}</td>
          
          
        </tr>
        <tr>
          
          <td>GST</td>
          <td>{formatter.format(75)}</td>
          
          
        </tr>
        <tr>
          
          <td>TOTAL</td>
          <td>{formatter.format(5033)}</td>
          
          
        </tr>
        
        
      </tbody>
    </Table>
  </div>
  </div>

   
    </>
  )
}

export default Fare 

