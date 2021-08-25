import Axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {ServiceCard} from "../../components/serviceCard";


const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;

const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const WarningText = styled.h3`
    color: rgb(100, 100, 100);
    font-weight:500;
`;


const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Services (props) {

    const [offeredServices, setServices] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const isServicesEmpty = !offeredServices || (offeredServices && offeredServices.lenthg ===0);

    const fetchServices = async () => {
        setLoading(true);
        const response = await Axios.get("http://localhost:9000/services").catch((err) => {
            console.log("Error: ", err);
        });

        await wait(3000);

        if (response) {
            setServices(response.data);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchServices();
    }, []);


    return (
        <ServicesContainer>
            <Title>Most Used Services & More</Title>
            <ServicesWrapper>
                {isServicesEmpty && !isLoading && ( 
                    <WarningText>No services are published yet!</WarningText>
                )}
                {!isServicesEmpty && isLoading && ( 
                    <WarningText>Loading...</WarningText>
                )}
                {!isServicesEmpty && !isLoading && offeredServices.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />
                ))}
            </ServicesWrapper>
        </ServicesContainer>

    );

}