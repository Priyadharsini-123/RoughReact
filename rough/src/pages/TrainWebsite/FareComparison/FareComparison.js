import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import WebsiteNavbar from '../../../components/WebsiteNavbar';
import Footer from '../Footer';
import { toast } from 'react-toastify';
import axios from 'axios';
import Select from 'react-select';
import { useGetFareComparisonFromQuery, useGetFareComparisonToQuery } from '../../../redux/features/api/FareComparisonAPI';

const FareComparison = () => {
    const [data,setData] = useState("")
    const [fromstation, setFromStation] = useState('');
    const [tostation, setToStation] = useState('');
    const [date, setDate] = useState('');
    const [options, setOptions] = useState([]);
    const [optionsTo, setOptionsTo] = useState([]);

  

    const { data: StationFromData } = useGetFareComparisonFromQuery(fromstation);
    const { data: StationToData } = useGetFareComparisonToQuery(tostation);

console.log(StationFromData);
console.log(StationToData);


console.log(fromstation);
console.log(tostation);
console.log(options);
console.log(optionsTo);



console.log(date);
useEffect(() => {
    if (StationFromData && StationFromData.data && StationFromData.data.StationList && Array.isArray(StationFromData.data.StationList)) {
        const options = StationFromData.data.StationList.map(station => ({
            value: station.stationCode, // Use station code as value
            label: `${station.stationName}-${station.stationCode}`,
        }));
        setOptions(options);
    }
}, [StationFromData]);

useEffect(() => {
    if (StationToData && StationToData.data && StationToData.data.StationList && Array.isArray(StationToData.data.StationList)) {
        const optionsTo = StationToData.data.StationList.map(station => ({
            value: station.stationCode, // Use station code as value
            label: `${station.stationName}-${station.stationCode}`,
        }));
        setOptionsTo(optionsTo);
    }
}, [StationToData]);



    const handleSubmit = async () => {
       
        const formattedDate = new Date(date);
        const formattedDateString = `${formattedDate.getDate()}-${formattedDate.getMonth() + 1}-${formattedDate.getFullYear()}`;
        console.log(formattedDateString);
        try {
            const response = await axios.get(
                `https://api-trainsonwheels.onrender.com/info/priceComparison1?fromStnCode=${fromstation}&destStnCode=${tostation}&doj=${formattedDateString}`
            );

            if (response && response.data) {
                setData(response.data.data);
                console.log(response.data.data);
                toast.success(response.data.message, { autoClose: 1000 });
            } else {
                toast.error(
                    response.error?.data?.error || 'Failed to fetch data',
                    { autoClose: 1000 }
                );
            }
        } catch (error) {
            toast.error('An error occurred', { autoClose: 1000 });
        }
    };

    const customStyles = {
        control: provided => ({
          ...provided,
          height: '60px',
          width: '100%',
        }),
      };
      
      const formatDateForInput = (inputDate) => {
        const year = inputDate.getFullYear();
        const month = `${(inputDate.getMonth() + 1)}`.padStart(2, '0');
        const day = `${inputDate.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
      const handleDateChange = (e) => {
        const inputDate = new Date(e.target.value);
        setDate(formatDateForInput(inputDate));
      };
    
      
      
    return (
        <>
            <WebsiteNavbar />
            <div className='mt-5'>
            
                <Container fluid>
                    <Row className="fareC-backgrounds mt-0 justify-content-center align-items-center text-center">
                        <h3
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 'clamp(24px, 5vw, 45px)',
                                textAlign: 'center',
                                margin: '30px 0',
                            }}
                        >
                            Fare Comparison
                        </h3>
                        <form className="w-100">
                            <Row className="p-3 d-flex flex-lg-row flex-column justify-content-center align-items-center text-center">
                                <Col className="my-4 mx-2" md={4} lg={4} xl={4} xxl={3}>
                                <Select
    styles={customStyles}
    placeholder="From station"
    options={options}
    value={options.find(option => option.value === fromstation)}
    onChange={selectedOption => {
        setFromStation(selectedOption.value); // Set station code as fromstation
    }}
/>
                                </Col>
                                <Col className="my-4 mx-2" md={4} lg={4} xl={4} xxl={3}>
                                <Select
    styles={customStyles}
    placeholder="To station"
    options={optionsTo}
    value={optionsTo.find(option => option.value === tostation)}
    onChange={selectedOption => {
        setToStation(selectedOption.value); // Set station code as tostation
    }}
/>
                                </Col>
                                <Col className="my-4 mx-2" md={4} lg={4} xl={4} xxl={3}>
                                <input
      style={{ width: '100%', height: '60px' }}
      type="date"
      placeholder="Date"
      className="form-control custom-input"
      value={date}
      onChange={handleDateChange}
    />


                                </Col>
                                <Col className="my-4 mx-2 d-flex justify-content-center align-items-center " md={4} lg={4} xl={4} xxl={3}>
                                    <Button
                                   
                                        style={{
                                            backgroundColor: '#0077B2',
                                            border: 'none',
                                            width: '100%',
                                            height: '60px',
                                            fontWeight: 'bold',
                                       
                                        }}
                                        type="button"
                                       onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default FareComparison;
